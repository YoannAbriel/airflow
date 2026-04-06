
import os
import json
import datetime
from garminconnect import Garmin

def get_garmin_data():
    yesterday = (datetime.date.today() - datetime.timedelta(days=1)).isoformat()
    try:
        client = Garmin()
        client.login(os.path.expanduser('~/.garminconnect'))
        
        data = {
            "sleep": client.get_sleep_data(yesterday),
            "hrv": client.get_hrv_data(yesterday),
            "readiness": client.get_training_readiness(yesterday),
            "body_battery": client.get_body_battery(yesterday),
            "status": client.get_training_status(yesterday)
        }
        print(json.dumps(data))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    get_garmin_data()
