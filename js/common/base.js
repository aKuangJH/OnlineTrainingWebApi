//获取元素样式
function getStyle(element, style) {
    if (typeof getComputedStyle === 'function') {
        return getComputedStyle(element)[style];
    } else {
        return element.currentStyle[style];
    }
};

// 数组类型判断
function typeArray(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Array';
};

// 仿字符串的indexOf 参数分别是：数组，要查找的项，起始下标
function arrindexOf(arr, val, index) {
    index = typeof(index) === 'undefined' ? 0 : index;
    for (var i = index; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
};

// 获取随机数 参数：随机数的范围
// 1、大减小加1 2、乘以随机数 3、加上最小值 4、向下取整
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


//获取当前元素与页面顶部的距离 即 获取一个元素在文档中的位置
function getPost(obj) {
    var o = {
        left: 0,
        top: 0
    }
    while (obj) {
        o.top += obj.offsetTop;
        o.left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
    return o;
};

// 判断浏览器中是否有placeholder属性： 先创建一个input标签， 判断placeholder是否在input属性里， 在返回true， 不在返回false
function isPlaceholderSupport() {
    return 'placeholder' in document.createElement('input');
};


// 阻止事件冒泡
function stopPropagation(ev) {
    if (ev.stopPropagation) {
        // 标准浏览器
        ev.stopPropagation();
    } else {
        // 非标准
        ev.cancelBubble = true;
    }
};

// 事件绑定：参数：元素，事件，要执行的函数
function bind(obj, event, fn) {
    if (obj.addEventListener) {
        // 标准浏览器
        obj.addEventListener(event, fn, false);
    } else {
        // IE678
        obj.attachEvent('on' + event, fn);
    }
};

// 事件解绑：参数：元素，事件，要执行的函数
function unbind(obj, event, fn) {
    if (obj.removeEventListener) {
        // 标准浏览器
        obj.removeEventListener(event, fn, false);
    } else {
        // IE678
        obj.detachEvent('on' + event, fn);
    }
};


// 阻止事件的默认行为
function preventDefault(ev) {
    if (ev.preventDefault) {
        // 标准浏览器
        ev.preventDefault();
    } else {
        // IE678
        ev.returnValue = false;
    }
};
//滚轮
function wheelDelta(ev) {
    if (ev.wheelDelta) {
        // ie 谷歌
        return ev.wheelDelta; // 向上120，向下-120
    } else {
        // 火狐
        return ev.detail * -40; // 向上-3， 向下3
    }
}

//通过class获取元素
function getClassElement(parent, classN) {
    var arr = []; // 存储找到的元素
    var eles = parent.getElementsByTagName('*'); // 找到这个父级下面所有的元素

    // 把每个元素拿过来看一下它的class
    for (var i = 0; i < eles.length; i++) {
        // 得到每个元素的class，把它的class用空格拆分
        var classArr = eles[i].className.split(' ');

        for (var j = 0; j < classArr.length; j++) {
            if (classArr[j] === classN) {
                arr.push(eles[i]);
                break;
            }
        }
    }

    return arr;
}

var U = (function() {
    // 获取元素样式，注意不要用它来获取复合样式，要获取单一样式，要获取显示定义的样式
    // 参数：元素, 样式名  返回带单位的样式值
    var getStyle = typeof(window.getComputedStyle) === 'function' ? function(obj, attr) {
        // 标准浏览器(IE9及以上)
        return window.getComputedStyle(obj)[attr];
    } : function(obj, attr) {
        // IE8及以下
        return obj.currentStyle[attr];
    };


    // 参数：元素, 要改变的样式（json），回调
    // 所要改变的样式，需要在css里显示的定义
    var move = function(obj, json, callback) {
        clearInterval(obj.timer);
        var dir, // 方向步长
            now, // 当前位置
            speed, // 此次应该运动的位置
            target; // 目标

        obj.timer = setInterval(function() {
            var iBtn = true; // 开关

            for (var attr in json) {
                target = json[attr]; // 目标位置

                if (attr === 'opacity') {
                    now = Math.round(getStyle(obj, 'opacity') * 100); // 当前位置
                } else {
                    now = parseInt(getStyle(obj, attr));
                };

                dir = (target - now) / 8; // 步长

                // 给步长取整，dir是否大于0，如果大于0，向上取整，否则向下取整
                dir = dir > 0 ? Math.ceil(dir) : Math.floor(dir);

                speed = now + dir;

                if ((speed >= target && dir > 0) || (speed <= target && dir < 0)) {
                    speed = target;
                }

                // 设置样式
                if (attr === 'opacity') {
                    obj.style.opacity = speed / 100;
                    obj.style.filter = 'alpha(opacity = ' + speed + ')';
                } else {
                    obj.style[attr] = speed + 'px';
                };

                if (speed !== target) {
                    iBtn = false;
                }
            }

            if (iBtn) {
                clearInterval(obj.timer);
                callback && setTimeout(function() {
                    callback.call(obj);
                }, 25);
            }
        }, 25);
    };


    // 通过ID获取元素
    var getId = function(id) {
        return document.getElementById(id);
    };

    // 通过class获取元素，IE8及以上返回一个类数组，IE7及以下返回一个数组
    // 接收两个参数时：父级，class名
    // 接收一个参数时：class名，如果只有一个参数，就查找整个页面
    var getClass = document.querySelector ? function(parent, classname) {
        // IE8及以上
        if (typeof(classname) === 'undefined') {
            classname = parent;
            parent = document;
        }
        return parent.querySelectorAll('.' + classname);
    } : function(parent, classname) {
        // IE7及以下
        if (typeof(classname) === 'undefined') {
            classname = parent;
            parent = document;
        }
        var arr = [];
        var re = new RegExp('\\b' + classname + '\\b');
        var eles = parent.getElementsByTagName('*');
        for (var i = 0, len = eles.length; i < len; i++) {
            if (re.test(eles[i].className)) {
                arr.push(eles[i]);
            }
        }
        return arr;
    };


    // 如果有classList属性，则是IE10及以上浏览器
    var isClassList = document.createElement('div').classList;

    // 元素是否有某个class，返回true或false
    var hasClass = isClassList ? function(obj, classname) {
        // IE10及以上
        return obj.classList.contains(classname);
    } : function(obj, classname) {
        // IE9及以下
        var re = new RegExp('\\b' + classname + '\\b');
        return re.test(obj.className);
    };

    // 给元素添加class
    var addClass = isClassList ? function(obj, classname) {
        // IE10及以上
        obj.classList.add(classname);
    } : function(obj, classname) {
        // IE9及以下
        if (!obj.className) {
            // 如果没有class，直接添加
            obj.className = classname;
        } else if (!hasClass(obj, classname)) {
            // 如果没有这个class，则添加
            obj.className += ' ' + classname;
        }
    };

    // 给元素删除某个class
    var removeClass = isClassList ? function(obj, classname) {
        // IE10及以上
        obj.classList.remove(classname);
    } : function(obj, classname) {
        // IE9及以下
        if (hasClass(obj, classname)) {
            var arr = obj.className.split(/\s+/);
            var pos = -1;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i] === classname) {
                    pos = i;
                    break;
                }
            }
            arr.splice(i, 1);
            obj.className = arr.join(' ');
        }
    };


    // 切换元素的类名，如果有，则删除; 如果没有，则添加
    var toggleClass = isClassList ? function(obj, classname) {
        // IE10及以上
        obj.classList.toggle(classname);
    } : function(obj, classname) {
        // IE9及以下
        if (hasClass(obj, classname)) {
            removeClass(obj, classname);
        } else {
            addClass(obj, classname);
        }
    };

    // 创建元素
    var create = function(ele) {
        return document.createElement(ele);
    };

    // 删除元素
    var remove = function(obj) {
        obj.parentNode.removeChild(obj);
    };

    // 作为子级，添加到最后。参数：父级，要添加的元素
    var append = function(parent, obj) {
        parent.appendChild(obj);
    };

    // 作为子级，添加到最前。参数：父级，要添加的元素
    var prepend = function(parent, obj) {
        var firstChild = parent.children[0];
        if (firstChild) {
            parent.insertBefore(obj, firstChild);
        } else {
            parent.appendChild(obj);
        }
    };

    // 作为兄弟元素，添加到target的前面。参数为：参照物，要添加的元素
    var before = function(target, obj) {
        target.parentNode.insertBefore(obj, target);
    };

    // 作为兄弟元素，添加到target的后面。参数为：参照物，要添加的元素
    var after = function(target, obj) {
        var parent = target.parentNode;
        if (parent.lastChild === target) {
            parent.appendChild(obj);
        } else {
            parent.insertBefore(obj, target.nextSibling);
        }
    };

    // 获取元素到页面的距离，参数为元素。.left代表到左边的距离，.top代表到顶部的距离
    var getPos = function(obj) {
        var pos = { left: 0, top: 0 };
        while (obj) {
            pos.left += obj.offsetLeft;
            pos.top += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return pos;
    };


    // 去除字符串左右空格
    var trim = String.prototype.trim ? function(str) {
        // IE9及以上
        return str.trim();
    } : function(str) {
        // IE8及以下
        return str.replace(/^\s+|\s+$/g, '');
    };

    // 数组的indexOf方法，接收三个参数：数组，要查找的项，起始值（不写从0开始）
    var indexOf = Array.prototype.indexOf ? function(arr, value, index) {
        // IE9及以上
        index = typeof(index) === 'undefined' ? 0 : index;
        return arr.indexOf(value, index);
    } : function(arr, value, index) {
        // IE8及以下
        index = typeof(index) === 'undefined' ? 0 : index;
        for (var i = index, len = arr.length; i < len; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;
    };

    // 数组类型判断
    var isArray = Array.isArray ? function(arr) {
        // IE9及以上
        return Array.isArray(arr);
    } : function() {
        // IE8及以下
        return Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
    };

    // 随机数，参数为：最小值，最大值
    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };


    // 阻止冒泡，接收一个事件对象
    var stop = function(ev) {
        if (ev.stopPropagation) {
            // IE9及以上支持
            ev.stopPropagation();
        } else {
            // IE8及以下
            ev.cancelBubble = true;
        }
    };

    // 阻止事件的默认行为，接收一个事件对象
    var prevent = function(ev) {
        if (ev.preventDefault) {
            // IE9及以上支持
            ev.preventDefault();
        } else {
            // IE8及以下
            ev.returnValue = false;
        }
    };

    // 向上返回120， 向下返回-120
    var getWheelDelta = function(ev) {
        if (ev.wheelDelta) {
            // IE/谷歌
            return ev.wheelDelta;
        } else {
            // 火狐
            return ev.detail * -40;
        }
    };

    // 事件绑定
    var bind = document.addEventListener ? function(obj, event, fn) {
        // IE9及以上
        obj.addEventListener(event, fn, false);
    } : function(obj, event, fn) {
        // IE8及以下
        obj.attachEvent('on' + event, function() {
            fn.call(obj);
        });
    };




    return {
        getStyle: getStyle, // 获取元素样式
        move: move, // 缓冲运动，接收三个参数：元素, 样式json, 回调(回调中的this为当前元素)

        // 获取元素
        getId: getId, // 通过ID获取元素
        getClass: getClass, // 通过class获取元素

        // 元素class相关
        hasClass: hasClass, // 判断元素是否有某个class
        addClass: addClass, // 给元素添加class
        removeClass: removeClass, // 元素删除某个class
        toggleClass: toggleClass, // 切换元素的类名

        // DOM相关
        create: create, // 创建元素
        remove: remove, // 删除元素
        append: append, // 作为子级，添加到最后。参数：父级，要添加的元素
        prepend: prepend, // 作为子级，添加到最前。参数：父级，要添加的元素
        before: before, // 作为兄弟元素，添加到target的前面。参数为：参照物，要添加的元素
        after: after, // 作为兄弟元素，添加到target的后面。参数为：参照物，要添加的元素
        getPos: getPos, // 获取元素到页面的距离，参数为元素

        // 字符串相关
        trim: trim,

        // 数组相关
        indexOf: indexOf,
        isArray: isArray,

        // 随机数
        getRandom: getRandom,

        // 事件相关
        stop: stop, // 阻止冒泡，参数为事件对象
        prevent: prevent, // 阻止事件的默认行为，参数为事件对象
        getWheelDelta: getWheelDelta, // 鼠标滚轮方向，参数为事件对象
        bind: bind // 事件绑定

    };
})();