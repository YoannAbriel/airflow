import os
import json
import datetime
from garminconnect import Garmin

TOKEN_DIR = os.path.expanduser("~/.garminconnect")

def fetch_garmin_data():
    try:
        client = Garmin()
        client.garth.load(TOKEN_DIR)
        
        # Another source: client.get_rhr_and_fitness_age(date)
        today = datetime.date.today().isoformat()
        try:
            rhr_fitness = client.get_rhr_and_fitness_age(today)
            rhr = rhr_fitness.get('restingHeartRate')
        except:
             rhr = None
             
        # Average from several days if possible
        rhrs = []
        for i in range(7):
            d = (datetime.date.today() - datetime.timedelta(days=i)).isoformat()
            try:
                # get_heart_rates(date) returns daily heart rate data with RHR
                h_rates = client.get_heart_rates(d)
                if h_rates and 'restingHeartRate' in h_rates:
                    rhrs.append(h_rates['restingHeartRate'])
            except:
                continue
        
        if not rhrs and rhr:
            rhrs = [rhr]
            
        if not rhrs:
            return {"error": "Could not find any RHR data"}
            
        # HRV
        try:
             hrv_data = client.get_hrv_data(today)
             last_hrv = hrv_data.get('hrvSummary', {}).get('lastNightAvg', 'N/A')
        except:
             last_hrv = "N/A"
             
        return {
            "avg_rhr": round(sum(rhrs)/len(rhrs)),
            "hrv_summary": last_hrv,
            "days_fetched": len(rhrs)
        }
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    print(json.dumps(fetch_garmin_data()))
