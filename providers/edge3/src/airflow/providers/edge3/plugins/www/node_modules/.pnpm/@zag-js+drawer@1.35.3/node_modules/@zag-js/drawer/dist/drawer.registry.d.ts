declare function notify(): void;
declare const drawerRegistry: {
    register(id: string, el: HTMLElement): void;
    unregister(id: string): void;
    setSwiping(id: string, swiping: boolean): void;
    hasSwipingAfter(id: string): boolean;
    notify: typeof notify;
    getEntries(): Map<string, HTMLElement>;
    subscribe(fn: () => void): () => void;
};

export { drawerRegistry };
