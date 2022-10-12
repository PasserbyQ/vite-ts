export function debounce(func: any, wait: any, immediate?: any) {
    let timeout: any, args: any, context: any, timestamp: any, result: any;

    const later = function () {
        const last = +new Date() - timestamp;

        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function (...args: any) {
        // @ts-ignore
        context = this;
        timestamp = +new Date();
        const callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
}


export function throttle(fn: any, wait: number) {
    // let timer:any = null;
    // return function () {
    //     let context = this;
    //     let args = arguments;
    //     if (!timer) {
    //         timer = setTimeout(function () {
    //             fn.apply(context, args);
    //             timer = null;
    //         }, wait);
    //     }
    // };
}

export function deepClone(obj: any) {
    function isObject(o: any) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null;
    }

    if (!isObject(obj)) {
        throw new Error('非对象');
    }

    let isArray = Array.isArray(obj);
    let newObj = isArray ? [...obj] : { ...obj };
    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
    });

    return newObj;
}

/**
 * @description 使用递归处理路由菜单，生成一维数组
 * @param {Array} menuList 所有菜单列表
 * @param {Array} newArr 菜单的一维数组
 * @return array
 */
export function handleRouter(routerList: Menu.MenuOptions[], newArr: string[] = []) {
    routerList.forEach((item: Menu.MenuOptions) => {
        typeof item === "object" && item.path && newArr.push(item.path);
        item.children && item.children.length && handleRouter(item.children, newArr);
    });
    return newArr;
}

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export function getBrowserLang() {
    let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
    let defaultBrowserLang = "";
    if (browserLang.toLowerCase() === "cn" || browserLang.toLowerCase() === "zh" || browserLang.toLowerCase() === "zh-cn") {
        defaultBrowserLang = "zh";
    } else {
        defaultBrowserLang = "en";
    }
    return defaultBrowserLang;
}

/**
 * @description 扁平化数组对象
 * @param {Array} arr 数组对象
 * @return array
 */
export function getFlatArr(arr: any) {
    return arr.reduce((pre: any, current: any) => {
        let flatArr = [...pre, current];
        if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
        return flatArr;
    }, []);
}

/**
 * @description 去除资产编号里的0
 * @param {string} assetnumber 资产编号 CN060000140082900000
 * @return string
 */
export function removeZero(assetnumber: string) {
    const key = '0000'
    const keyLength = key.length
    const codeLength = 4
    const code = assetnumber.slice(0, codeLength)
    const number = assetnumber.slice(codeLength, codeLength + keyLength)
    const endNumber = assetnumber.slice(-keyLength)
    if (number === key && endNumber === key) {
        return code + assetnumber.slice(codeLength + keyLength, -codeLength)
    } else if (number === key) {
        return code + assetnumber.slice(codeLength + keyLength)
    } else if (endNumber === key) {
        return code + assetnumber.slice(codeLength, -codeLength)
    }
    return ''
}