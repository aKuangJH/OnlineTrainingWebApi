window.onload = function() {
    var oBox = document.getElementById('box');
    var oUl = oBox.getElementsByTagName('ul')[0];
    var aLi = oUl.querySelectorAll('li'); 
    var btnLeft = oBox.getElementsByClassName('btnLeft')[0];
    var btnRight = oBox.getElementsByClassName('btnRight')[0];
    var aSpan = oBox.getElementsByTagName('span');

    var imgWidth = aLi[0].offsetWidth; // 一张图的宽度
    oUl.appendChild(aLi[0].cloneNode(true)); // 把第一张图片克隆，添加到ul中
    oUl.style.width = imgWidth * (aLi.length + 1) + 'px'; // 给ul设置宽度

    var count = 0;
    var timer = null;

    auto();

    // 滑上停止
    oBox.onmouseover = function() {
        clearInterval(timer);
        btnLeft.style.display="block";
        btnRight.style.display="block";
    };
    // 滑离开启
    oBox.onmouseout = function() {
        auto();
        btnLeft.style.display="none";
        btnRight.style.display="none";
    };

    // 左边点击
    btnLeft.onclick = function() {
        if (count <= 0) {
            count = aLi.length;
            oUl.style.left = -count * imgWidth + 'px';
        }
        count--;
        change();
    }

    // 右边点击
    btnRight.onclick = function() {
        if (count > aLi.length - 1) {
            count = 0;
            oUl.style.left = 0;
        }
        count++;
        change();
    }

    for (let i = 0; i < aSpan.length; i++) {
        aSpan[i].onmouseover = function() {
            count = i;
            change();
        }
    }

    function auto() {
        timer = setInterval(function() {
            if (count > aLi.length - 1) {
                count = 0;
                oUl.style.left = 0;
            }
            count++;
            change();
        }, 2000);
    }

    function change() {
        for (let i = 0; i < aSpan.length; i++) {
            aSpan[i].className = '';
        }

        if (count > aLi.length - 1) {
            aSpan[0].className = 'active';
        } else {
            aSpan[count].className = 'active';
        }

        U.move(oUl, {
            left: -count * imgWidth
        })
    }
}