const lsa = window.localStorage;

export class Storage {

    static getItem(key: string) {
        try {
            const val = lsa.getItem(key)!;
            return JSON.parse(val);
        } catch (err) {
            return null;
        }
    }

    static setItem(key: string, val: any) {
        lsa.setItem(key, JSON.stringify(val));
    }

    static clear() {
        lsa.clear();
    }

    static keys() {
        return lsa.keys();
    }

    static removeItem(key: string) {
        lsa.removeItem(key);
    }

}



export enum StorageKey {
    Illegalsoft = 'illegalsoft', // 违规软件
    language = 'language' // 语言
}