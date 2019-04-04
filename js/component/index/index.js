// 切换试题库标签
var plabel1=document.getElementsByClassName('label')[0];
var plabel2=document.getElementsByClassName('label')[1];
plabel1.onclick=function(){
    if(plabel1.className=='label'){
        plabel1.className="label active";
    }else{
        plabel1.className="label";
    }
    plabel2.className="label";
};
plabel2.onclick=function(){
    if(plabel2.className=='label'){
        plabel2.className="label active";
    }else{
        plabel2.className="label";
    }
    plabel1.className="label";
};

// 自执行函数

var timer=null;

(
    function(){
        // 不同标签下展示不同试题库
        var paperlist = document.getElementsByClassName('paperlist')[0];
        var items=paperlist.getElementsByClassName('item');//数组
        // 帖子内容
        var bbscontent = document.getElementsByClassName('bbscontent')[0];

        for(var i=0;i<items.length;i++){
            var detail = items[i].getElementsByClassName('details')[0];
            var star = items[i].getElementsByClassName('stars')[0];
            // items[i].onmouseover=function(){
            //     var that = this;
            //     this.timer=setTimeout(function(){                
            //         // console.log('滑上--定时器');
            //         var pos=U.getPos(that);
            //         var left = pos.left;
            //         var top = pos.top;
            //         var parent = U.create('div');
            //         var newDiv = U.create('div');
            //         var more = U.create('div');
            //         parent.setAttribute('class','itemNew');
            //         newDiv.setAttribute('class','hoverDiv');
            //         newDiv.innerHTML=detail.innerHTML;
            //         newDiv.getElementsByClassName('details-img')[0].parentNode.removeChild(newDiv.getElementsByClassName('details-img')[0]);
            //         newDiv.getElementsByClassName('hoti')[0].parentNode.removeChild(newDiv.getElementsByClassName('hoti')[0]);
            //         more.setAttribute('class','more');
            //         more.innerHTML=`<div class="problemSum">共10题</div>
            //         <div class="toList">查看详情</div>`;
            //         newDiv.style.border="1px solid #ababab";
            //         parent.style.left = left + 'px';
            //         parent.style.top = top + 'px';
            //         U.append(newDiv, more);
            //         star.style.color="#33b18b";
            //         U.append(parent,newDiv);
            //         U.append(parent,star);
            //         U.append(document.body, parent);
            //         // 对一个元素滑上时应该只有一个生成
            //     },2000);
            // }
            // items[i].onmouseleave = function() {
            //     console.log('滑下');
            //     clearTimeout(this.timer);
            // }
        }
        // function formatterDateTime() {
		// 	var date=new Date()
		// 	var month=date.getMonth() + 1
		// 	var datetime = date.getFullYear()
		// 			+ ""// "年"
		// 			+ (month >= 10 ? month : "0"+ month)
		// 			+ ""// "月"
		// 			+ (date.getDate() < 10 ? "0" + date.getDate() : date
		// 					.getDate())
		// 			+ ""
		// 			+ (date.getHours() < 10 ? "0" + date.getHours() : date
		// 					.getHours())
		// 			+ ""
		// 			+ (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
		// 					.getMinutes())
		// 			+ ""
		// 			+ (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
		// 					.getSeconds());
		// 	return datetime;
		// }
		// $.ajax({
		// 	type: 'post',
		// 	url: 'http://route.showapi.com/1670-1',
		// 	dataType: 'json',
		// 	data: {
		// 		"showapi_timestamp": formatterDateTime(),
		// 		"showapi_appid": '78701', //这里需要改成自己的appid
		// 		"showapi_sign": 'db37573cfb6e4b70a64f88230e594b17',  //这里需要改成自己的应用的密钥secret
		// 		"page":"1"
		// 	},

		// 	error: function(XmlHttpRequest, textStatus, errorThrown) {
		// 		alert("操作失败!");
		// 	},
		// 	success: function(result) {
		// 		console.log(result); //console变量在ie低版本下不能用
        //         // var bbsdata = result.showapi_res_body.pagebean.contentlist;
                
        //         // alert(result.showapi_res_code)
		// 	}
        // });
        var bbsdata = [
            {
              "time": "2019-03-29 11:24",
              "title": "工人挖掘机下救豹猫幼崽 民警用婴幼儿奶粉喂养",
              "id": "5c9d989794840af4ac0cbd6f",
              "content": "[摘要]工人和民警共同守护一只国家“三有”保护动物豹猫的幼崽。获救的豹猫宝宝。本文图片均为金平县自然资源公安局提供中新网昆明3月27日电记者27日从云南省红河州金平县自然资源公安局获悉，近日该县一在建高速公路施工现场，有工人于挖掘机下发现一只豹猫幼崽，工人及时联系警方成功救助这只豹猫幼崽。获救的豹猫宝宝。25日，金平县自然资源公安局接到110指挥中心报案称：金平县元蔓高速公路一施工工地上，有工人发现一只野生动物幼崽。民警赶到工地时，工人们已把小猫放进一个纸箱内装好。据报案的工人称，这只小猫是在一辆挖掘机下面发现的，当时工人听见类似小猫的微弱叫声，找到后便将它放入纸箱。工人们将纸箱放在工地附近，希望母猫回来找寻幼崽，但到第二天也不见母猫来寻，无奈之下便报了警。工地工人将豹猫宝宝交给民警。民警在工地看见，这只小家伙脐带还没有剪断，在纸箱内瑟瑟发抖，不时传出仿佛婴儿般的叫声，甚是可怜，于是立即将它带回了自然资源公安局，并请来了金平县分水岭国家级自然保护区管护局的专家进行鉴定。经鉴定，该猫为国家“三有”保护动物豹猫，并被列入《华盛顿公约》附录II物种名录。豹猫是产于亚洲的猫科动物，体型较小，略比家猫大，体形十分匀称，头圆吻短，眼睛大而圆，瞳孔直立，耳朵小，而呈圆形或尖形。豹猫主要栖息于山地林区、郊野灌丛和林缘村寨附近，主要以鼠类、松鼠、飞鼠、兔类、蛙类、蜥蜴、蛇类、小型鸟类、昆虫等为食，也吃浆果、榕树果和部分嫩叶、嫩草。动物专家给豹猫宝宝冲泡奶粉。为防止这只幼小的生命因饥饿而出现意外，专家为小家伙找来了婴幼儿配方奶粉，用针管注射的方式给这只还没睁眼的豹猫宝宝细心喂奶，为其补充营养。（原题为《工人挖掘机下救下豹猫幼崽民警用婴幼儿奶粉喂养》）",
              "com": "中新网",
              "href": "https://gongyi.qq.com/a/20190329/004688.htm"
            },
            {
              "time": "2019-03-29",
              "title": "男子哭着跨过大桥栏杆 生死瞬间她伸手拽住",
              "id": "5c9d985994840af4ac0cbd52",
              "content": "<img src='http://app2.showapi.com/img/publicwelfare_img/20190329/5ad866b7-e3f1-4524-b272-914541dda034.jpg' />",
              "com": "天天正能量",
              "href": "https://story.now.taobao.com/show_story.htm?id=34317"
            },
            {
              "time": "2019-03-28 14:34",
              "title": "“2018慈善名人榜”发布 盛典颁奖礼群星璀璨",
              "id": "5c9cb9d894840af4ac0c01ee",
              "content": "[摘要]来自公益慈善、演艺、体育、企业、传媒领域的数百位精英齐聚一堂，共同见证名人慈善的力量。3月26日，由慈传媒主办、《中国慈善家》杂志、群瑞文化等多家机构联合主办的“2019慈善名人盛典”在北京柏悦酒店举行，由袁鸣、杨光主持，同时发布了“2018慈善名人榜”。来自公益慈善、演艺、体育、企业、传媒领域的数百位精英齐聚一堂，共同见证名人慈善的力量。打造“影响力慈善”发挥榜样的力量明星和名人已成为一支不容小觑的公益慈善力量，随着“影响力慈善”概念的不断普及，公众逐渐意识到，名人慈善的最大价值不在于捐款金额，而在于他们是否真正地做出了榜样，影响公众去了解和参与慈善。南都公益基金会理事长、中国慈善联合会副会长、《中国慈善家》名誉社长徐永光致辞正如南都公益基金会理事长、中国慈善联合会副会长、《中国慈善家》名誉社长徐永光在晚会致辞中表示，“对于明星做慈善，大家不要苛求他们捐多少钱，我们需要明星用人气带动更多的人关注慈善，需要明星给我们倡导一种正面的慈善精神和志愿文化，希望明星通过身体力行的创新，给社会做出示范。”同时，徐永光还呼吁明星做慈善可以更加关注一些重要的社会问题，比如最贫困农村孩子的音体美教育问题，这个关注点就是真正的公益扶贫。这也是《中国慈善家》杂志的初衷和价值所在，活动倡导聚焦于明星和名人发挥榜样的作用，号召更多公众参与，推动人人公益、人人向善的发展。随着越来越多明星和名人意识到名声背后是更大的责任和担当，他们参与公益事业的方式也逐渐发生变化，从代言公益活动、担任公益形象大使到发起、执行项目，或者成立个人基金会，逐渐呈现出持续性、多样化与专业化的面貌。这其中不乏较早介入公益慈善并持续经年做着的名人，也有新一代的年轻偶像，他们不仅自己身体力行参与公益，更是带动粉丝做了很多公益项目，传递偶像正能量，成为偶像履行社会责任的榜样。国际公益学院院长王振耀致辞国际公益学院院长王振耀表示，名人是国际合作非常重要的纽带，“我期望名人慈善家们能发挥他们的想象力，引领我们，给我们以示范，争取让中国的慈善真正和世界实现无缝对接，以此不辜负整个国家和社会对我们的期望。”当晚，林志玲、张信哲、周笔畅、杨澜、孙楠、邹市明、关悦、孔维、孙坚、坤音四子ONER、方锦龙、储兰兰、屈菁菁、潘斌龙、Mike隋、顾佳斌等40余位明星出席现场，晚会共颁发包括“年度人物奖”、“年度正能量团体奖”、“助残帮扶奖”、”持之以恒奖”等在内的18个奖项。“慈善名人榜”标准迭代阵容升级“慈善名人榜”是《中国慈善家》杂志年度重量级榜单之一，始创于2013年，在国内首次完整推出明星、名人公益慈善评价体系，也是国内完整关注明星与名人影响力慈善的权威榜单。每一年，榜单都对包括演艺明星、艺术家、运动员及主持人在内，凭借知名度和影响力获得市场回报的公众人物，在本年度公益、慈善领域的表现进行评估。2018年，《中国慈善家》杂志一如既往邀请公益慈善领域的专家及学者组成顾问团，评价结果以排行榜形式呈现并发布。慈传媒CEO、《中国慈善家》杂志创始人及发行人吴金豪致辞慈传媒CEO、《中国慈善家》杂志创始人及发行人吴金豪在晚会致辞中表示，公益慈善是公共人物群体真正发挥其影响力的最有价值的途径。“明星名人作为最有影响力的群体，通过公益行动产生强大的社会影响力，带动庞大的粉丝群参与公益，形成良好的社会氛围，对于中国公益慈善事业的发展将产生深远意义。”他提到，这是《中国慈善家》杂志连续六年发布“慈善名人榜”的重要原因。据主办方介绍，在“2018慈善名人榜”调研过程中发现，“无论是持续数年践行公益慈善事业的文体界大咖，还是新近参与到这一领域的新星，我们看到的是越来越多的公众人物将其社会影响力用于公益事业。”正因如此，本届榜单容量首次由30人扩展到40人，更全面、系统地呈现明星和名人在公益慈善领域的善举。与此同时，这一届的榜单评选标准作出了迭代，采用综合评价法，结合定量与定性评估方法，在四个维度展开了评选：年度个人捐赠额、年度个人间接捐赠额、年度个人公益活动，以及年度个人公益影响力。在2018“慈善名人榜”中，黄晓明&amp;Angelababy夫妇占据榜首，韩红位居第二，姚明&amp;叶莉夫妇排名第三。林志玲、杨澜、孔维、易烊千玺、王源、袁立、王俊凯、郎朗分别位列前十。《中国慈善家》杂志3月刊特以封面报道的形式，在入围“2018慈善名人榜”的40位明星中选取了杨洋(榜单排名15位)、周笔畅(榜单排名16位)、张天爱(榜单排名21位)、邹市明(榜单排名并列21位)、和张一山(榜单排名25位)进行专题报道。“2019慈善名人盛典”获奖名单(按颁奖顺序)星慈善·年度正能量团体——坤音四子ONER星慈善·公益践行奖——孙坚星慈善·知识美育奖——孔维扶贫创新奖——顾佳斌星慈善·艺术温度奖——张天爱星慈善·公益影像力量奖——屈菁菁星慈善·拳力益赴奖——邹市明星慈善·同心扶贫奖——佟大为&amp;关悦夫妇星慈善·乐活能量奖——肖战文化传承奖——方锦龙星慈善·音乐筑梦奖——周笔畅星慈善·爱及生灵奖——莫文蔚国学创新奖——储兰兰星慈善·音爱而声奖——张信哲慈善·助残帮扶奖——孙楠星慈善·持之以恒奖——杨澜星慈善·年度人物奖——黄晓明星慈善·年度人物奖——林志玲（原题为《慈善名人盛典颁奖礼群星璀璨，“2018慈善名人榜”隆重发布》）",
              "com": "中国慈善家网",
              "href": "https://gongyi.qq.com/a/20190328/006670.htm"
            },
            {
              "time": "2019-03-28 10:21",
              "title": "女子健身房昏厥 “90后”清华毕业生跪地施救",
              "id": "5c9c471694840af4ac0bc821",
              "content": "[摘要]刘永生深感整个社会急救知识匮乏，必须大力普及，救人救己。刘永生正在为公司职工进行急救技能培训。刘永生供图继3月25日晚，六名北京协和医生在体育场成功抢救一名心脏骤停的男性后，26日晚，山西省太原市某健身房也上演了一场急救。3月26日晚七点多，下班后的太原市卫健委工作人员刘永生按照惯例去健身房健身，“从镜子里看到我身后不远处一个女孩慢慢倒地，一开始没意识到是昏厥，可发现她旁边的水杯倒了女孩也没反应，我就感觉不妙。”刘永生回忆。刘永生立即跑过去查看，跪地呼喊“姑娘，你怎么了”，但是对方眼睛微闭，嘴唇发白，手臂冰冷，喃喃口述其四肢无力，呼吸困难。刘永生在朋友圈记录了施救过程。刘永生朋友圈截图接受过急救培训的刘永生立马准备救治，大声呼喊“有人晕倒了，快来人帮忙”，判断伤者不存在外伤，可以挪动，便让众人将其抬到空气流通的地方，抬高下颌，保持气道畅通。刘永生一边嘱咐身边人帮忙呼叫120，一边解下自己手腕上测量血压心率的智能手环带到对方手腕，通过数据监测和询问对方的健身教练，刘永生初步判断该女性为低血糖，向健身房工作人员要了两支葡萄糖喂服。两分钟后，刘永生贴近伤者耳朵询问情况；又过5分钟，伤者面色转红，体温和握力逐渐恢复；半个多小时后完全苏醒并能够坐立，可以讲话。“她说刚才自己几乎没有意识，特别害怕，我跟她讲了些健身需要注意的常识，陪着走动了一下，对方一直表示感谢。”刘永生回忆，整个急救的过程持续了十几分钟，“幸好只是低血糖，如果是心脏骤停，恐怕我一个人坚持不到医务人员赶到现场”。据了解，刘永生是一名“90后”，2017年毕业于清华大学医院管理研究院，经山西省委组织部选调至太原市卫健委工作，因“在处理医患纠纷中彰显理性和勇气”，被评为太原市“时代新人”。刘永生告诉记者：“施救期间多数人都是围观，还有人建议给女孩子头下垫个东西，但是这样反而会阻碍气道的通畅，所以这也让我感觉整个社会急救知识匮乏，必须大力普及，救人也能救己，作为一名卫生系统工作人员，我会尽所能来推动这件事。”（原题为：《山西女子健身房昏厥“90后”清华毕业生跪地施救》）",
              "com": "中新网",
              "href": "https://gongyi.qq.com/a/20190328/003758.htm"
            },
            {
              "time": "2019-03-28",
              "title": "90后女孩2年照顾200只流浪狗 每天休息不足五小时",
              "id": "5c9cb99a94840af4ac0c01e8",
              "content": "李盼每天休息的时间不足五小时，最艰苦时一个人要管100多只狗<img src='http://app2.showapi.com/img/publicwelfare_img/20190328/ae1384db-a98e-42ff-ae6c-c2d0f7da8b3d.jpg' />3月5日，本报联合阿里巴巴天天正能量、中国青年报等，启动2019年度“志愿者关爱行动”，面向全国寻找优秀志愿者。征集令才发出半个月，省内各地已推荐几十位志愿者参评，李盼就是其中一位。在南昌安义县的小村庄，一排排农舍整齐划一，这是南昌最大的流浪小动物基地。90后女孩李盼是这里的负责人。2016年，大学毕业的李盼并没有选择去北上广一线城市打拼，而是来到了安义县的偏远山村，照顾起了两百多只流浪狗。<img src='http://app2.showapi.com/img/publicwelfare_img/20190328/e96bbe10-af26-427e-a840-819b1854b60f.jpg' />条件艰苦10来间狗舍住着200多只流浪狗记者来到李盼经常进出的一个仓库，仓库里堆满了各种物资，有狗粮、消毒液、大米和粮油等。“这些物资都是社会爱心人士和爱心企业捐助的。”南昌小动物保护协会会长李盼告诉记者。据李盼介绍，整个小动物基地占地70亩，在大批的板栗树中间，10来间狗舍是200多只流浪狗共同的家。“之前只有几间简陋的屋子，去年在爱心人士的捐助下，新建了一排狗舍，这才有了10来间狗舍。”李盼向记者介绍，她每天早上8点前起床，花上一上午的时间打扫基地卫生，接着给流浪狗们准备午饭，下午再干一些杂活，给每只流浪狗做日常检查，最早也得到晚上8点才能休息。“我晚上还经常会接到求助电话，比如说有狗在车祸中被压断了腿，我们就会赶往现场去救援，将它送到医院治疗。等调养好了后，再接回基地安置。”李盼说，为了更好地照顾这些流浪狗，基地专门设置了一块区域，安排人精心照顾，直到它们完全恢复。<img src='http://app2.showapi.com/img/publicwelfare_img/20190328/3ad34ccb-783e-4812-9db2-fdcc79fe16fb.jpg' />人手不足最艰苦时一人要管100多只狗收留的流浪狗越来越多，但留在基地工作的人员却越来越少，李盼告诉记者，最艰苦的时候，她一个人得照顾100多只狗。“今年过年，我们上一任会长外出学习，整个基地只剩下两个人，每人要管100多只狗。”李盼向记者介绍，她也曾多次发布招聘广告，但一直无人问津。“光吃狗粮是不够的，营养跟不上，要做点米饭和菜拌在狗粮里。那段时间，我们两个人每天都得精心准备200多只狗的食物。”工作人员苏小宝告诉记者，加上一些生病、受伤的流浪狗需要特殊照顾，她和李盼每天休息的时间不足五小时。常被误伤正值青春的她双手却布满伤疤记者注意到，由于常年与流浪狗打交道，李盼双手不再白嫩，手心手背都布满了伤疤。李盼告诉记者，伤疤是在救助这些流浪狗时被误伤的。“一些流浪狗刚被送来的时候，对工作人员有敌意，给它们打针喂食的时候，有时会被它们误伤。”李盼说，“只要跟它们混熟了，就不会被伤到了。”“家里人一直劝我换一份工作，但是一想到这些流浪狗曾流浪街头的可怜境地，我便放心不下。在这里，它们至少能保证温饱。”李盼说，能够尽自己的一份力量，去帮助到这么多生命，让它们远离街头流浪的境况，对她来说是最大的回报。南昌晚报全媒体记者杨小勇胡萧",
              "com": "南昌晚报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34315"
            },
            {
              "time": "2019-03-28",
              "title": "我老板开车撞了盒马鲜生的外卖员",
              "id": "5c9cb99894840af4ac0c01e6",
              "content": "于是小喵想起很多年前曾有过一个梦想，因为看到网上有很多负能量信息，正能量信息却鲜有人传播，所以想建一个资讯收集网站，这个网站有两个版块，一个叫正网，一个叫负网，正网是正能量的资讯，负网是负能量的资讯。虽然这个网站没能建立起来，但昨晚老板发生的故事，我特别想让更多人知道，而指南猫是我粉丝量最多的一个账号，因此借这个账号发布这个故事。以下为昨晚老板发朋友圈的故事全文。今天真是多事的一天。先是电脑磁盘突然消失坏了，带着坏了的电脑出门准备明天去修，开车出停车场右转时，和盒马鲜生的外卖小哥哥撞了。此刻真的很想，把这一撞的故事分享给你们。嘭！一声闷响，只看见一辆电动车连人带车倒地。我和朋友停下车赶紧去扶人，电动车太重，一个人根本抬不起来，我和朋友两人架起电动车，外卖小哥哥从车底下挣扎着尝试爬起来，却使不上力。我放开架住的电动车去搀扶他，发现他浑身在抖根本无力行走。身旁的汽车、电动车仍然来来往往，停在这样的环境实在太危险。我一边安抚他没事没事，一边扶着他往人行道上靠，那一刻，我知道他一定大脑空白、只知疼痛。看到他努力挣扎着自己爬起来、感受到他身体因剧烈疼痛而颤抖时，心里狠狠的揪了一下。把他扶到安全的地方后，我问他伤到哪儿了？伤得怎么样？确认是否需要立即送医院。他说：没事没事，我没事，你们走吧。第一次遇到被撞人要求肇事者赶紧走。因电动车车头折坏无法推动，朋友还站在马路中扶着电动车，为防止二次事故，我只好先去帮朋友把车拖到人行道。可车实在太重，我使出全部力气也还是抬不上人行道，外卖小哥哥又挣扎着过来和我一起抬车。我让他不要动，先检查自己的受伤情况，他连连说没事，让我们不用管他。车都撞坏了无法再开，拖也拖不动，他连走路都困难，怎么可能不管。一再和他确认伤得怎么样，要带他去医院，他怎么也不肯，只好先陪着他在路旁先休息缓缓。后来外卖小哥哥的两位朋友赶过来，和他们聊天，知道他们都是山西长治人，他的两位朋友到上海时间长些，他才到上海第二天，今天因为开人行道被交警罚了100块，今天外卖送了25单赚了98块钱。他今年20岁，还有一个妹妹在上高中，母亲患了癌症，父亲做了胃部切除手术，他想赚钱所以辍学出去打工，听在上海的朋友说送外卖勤快些一个月可以赚1万5，所以就来了，打算存够20万就回老家开个餐馆。不过现在还在盒马鲜生编制外，是自己花了3500块租了这辆电动车兼职在送，要等盒马鲜生有人走位置空出来他才能正式顶上。听完他的话，我心里又狠狠地揪了一下。无论如何，电动车必需修，否则移动不了。于是我让朋友先陪着他，我去附近找找看，小卖部的老板热心地告诉我，前面右转巷子里有一家可以修电动车的。电动车修理店的老板听说我的车撞了抬不过来，于是和我走过去看，他看了被撞的车后，说撞得挺严重，要拆了看看才知道能不能修好，如果保险柱坏了那这辆车就废了。幸运的是，这位修车店的老板拆了车后说能修好，而且只要190块。无论怎么劝说，外卖小哥哥就是不肯去医院，他说去医院太贵没有必要花我们这么多钱。我们要帮他检查脚伤怎么样，他说今天送了一天外卖太臭不肯脱鞋。我扶他到办公楼大厅避风，他说不用自己能走，休息一晚上明天还能继续送外卖。我拜托他朋友送他回去，并且叮嘱不准他明天继续送外卖。电动车虽然还能开，但估计还得修补，他这两天如果不能送外卖还得损失工资，所以我和朋友把包里仅有的1千块现金塞给他，他拒绝收。他说是他开得太快所以和我们撞了，我们车也被撞坏了，他很不好意思，我们帮他把车修好了，他已经很感激，不能收我们的钱。我们告诉他，根据交通法规，无论如何，都是我们的责任，这是我该做的，这1千块也是他该收的。他说法规之外也有人情。我们说就算人情，我们比他年长、比他在上海时间长、收入比他高，也应该是我们照顾他。他说他在上海待待也就熟悉了，他也能挣1万5，他不要我们的钱。我的心再次揪了一下。最后，我把钱塞到他电动车后座上，跑了。他的朋友拿着钱追上来，非要还给我们，说不好意思收，我们连哄带骗地说，这钱又不是给你的，是给你朋友的，你不好意思干嘛，把他说得愣住我们才抽身离开。我们上车后，担心他们会等在路口，所以故意在车里多待了一会才开出停车场。开到路口后，发现他们还在，快递小哥哥坐在朋友电动车上想开过来拦我们，听见他喊“姐，哥，等一下”，我没有打开车窗，只朝他们挥了挥手，驾车离开，眼泪终于掉下来。这个历时3个多小时的故事，饱含太多信息，一时无法总结，只好叙事一般先记下来。",
              "com": "青年报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34316"
            },
            {
              "time": "2019-03-28",
              "title": "学生获奖者增三成 省级正能量城市首次发布",
              "id": "5c9c46d994840af4ac0bc800",
              "content": "<img src='http://app2.showapi.com/img/publicwelfare_img/20190328/ac14ed7c-ad0b-4891-8a18-4cbedb83b39a.jpg' />",
              "com": "天天正能量",
              "href": "https://story.now.taobao.com/show_story.htm?id=34314"
            },
            {
              "time": "2019-03-27 14:19",
              "title": "体育馆一男子心脏骤停倒地，6名协和医生救活",
              "id": "5c9b685694840af4ac0b008a",
              "content": "[摘要]北京东单体育馆上演了一场有惊无险的急救故事。据@北京协和医院消息，3月25日晚上八点多，几名协和医生正在东单羽毛球馆打球，发现隔壁篮球场一中年男性突然倒地。几位医生赶紧飞奔过去，发现是心跳骤停，随即呼叫120，同时立即开始心肺复苏。球馆里正好配备了自动除颤仪（AED），先后除颤四次，复苏总计十余分钟，终于转为自主心律，120迅速将病人就近转到同仁医院急诊，半个多小时后病人已经苏醒并能够讲话了。晚上10点左右，江伟医生特地去同仁医院看望，患者正在等着做冠造，情况稳定。协和医院提示：如果心脏有问题，尽量避免进行剧烈运动！据悉，这是继协和医院骨科医生在东单救治摔伤老人、ICU护士在东单抢救猝死路人、妇产科护士长在东单地铁急救晕厥路人，协和医学生在东单游泳馆抢救溺水者后，再次证明东单是世界上最安全区域！致敬医者仁心！网友：配置比医院内抢救级别都高！协和医生抢救中年男子的事，也引起了网友的广泛关注。有网友表示，以后要围着协和医院遛弯。有网友称，配置比医院内抢救级别都高！还有网友建议，运动场可以主动、免费引进医生来锻炼。（原标题《命真大！男子东单体育馆猝死，巧遇6位协和医生联手救活！》北京日报综合@北京协和医院网友评论）",
              "com": "北京日报",
              "href": "https://gongyi.qq.com/a/20190327/005892.htm"
            },
            {
              "time": "2019-03-27",
              "title": "郑州好车长阻止司机乱扔橘子皮刷爆朋友圈！刚刚他被奖5000元",
              "id": "5c9b681894840af4ac0b007a",
              "content": "大河报·大河客户端记者宁田甜通讯员张伟郑州一私家车主随意往路上扔橘子皮，且一扔就是好几次。郑州一公交车长实在看不下去，下车将皮捡起来，还给私家车司机，并对其进行教育。这一幕受到乘客点赞。大河报•大河客户端对此报道后，引发社会强烈反响。读者网友纷纷为郑州车长的社会责任和担当点赞。阿里巴巴天天正能量也被郑州好车长的举动所感动，独家联合大河报，奖励车长5000元正能量奖金。郑州那名制止私家车司机乱扔橘子皮的好车长，天天正能量联合大河报为其发奖5000元25日下午，阿里巴巴天天正能量联系大河报•大河客户端记者，决定联合大河报为张恒颁发“天天正能量”特别奖，及正能量奖金5000元。阿里巴巴天天正能量给张恒的颁奖词为：“果断下车，弯腰捡起，霸气递回，严词说教……一连串霸气的举动里，不仅有躬亲力行的文明示范，还有一份对环卫工的体恤关爱;不仅让车主认识到错误，也给每一个看到视频的网友，上了一堂生动的文明课。”“文明不是嘴上说说，更需要用行动证明。希望我们都能做一个高素质的文明人，也希望我们每一个人在目睹不文明行为时，都能够有勇气站出来说’不’。”阿里巴巴天天正能量负责人表示，这也是天天正能量给张恒颁发正能量奖励的初衷，希望能够唤醒更多人心中的文明素养。得知自己获得天天正能量奖，张恒很意外，他说只是做了一件举手之劳的小事，却受到媒体和社会这么大的关注和褒奖，太意外了。今后，他还会尽你所能，为文明郑州建设贡献自己一份微薄之力。据了解，天天正能量是一个专注于奖励平凡人的善行义举的知名公益平台，由阿里巴巴集团联合大河报在内的全国100多家主流媒体共同打造，迄今已在全国奖励了6100多人。此前，大河报曾报道过的郑州送饭老人朱东生、郑州环卫工人宋红彦、灵宝90后姑娘彭露露、周口独腿女孩罗雨、悬空救人女医生赵粉艳、新乡男护士景志文、洛阳法医马秀伟等100多个河南正能量人物，也曾获得天天正能量奖。他们的正能量故事经过大河报的报道和阿里巴巴的奖励，曾先后受到新华社、人民日报等央媒关注，在全国赢得广泛赞誉。当时是快车道，担心环卫工去清理危险25日，大河报•大河客户端记者回访张恒，他说，当时他先是用车载语音器提示那名司机，对方可能没听到还是咋地，还继续往外扔。这下，他看不下去了。他直接下车，当他将橘子皮捡起来给那名司机时多方也很惊诧。“我就说，一个是快车道上，环卫工清理太危险，二个是这种行为很不文明。我说他后，让他把橘子皮收起来，等找到垃圾桶后给扔了。他可能意识到错了，要给我递烟。我没接。”张恒说，现在是法制社会，当时没想着会被报复，“毕竟他做错事，咱也只是善意提醒。”父母和爷奶都是农民工，体会到劳动者不易总是尽己所能帮扶弱者3月25日，大河报•大河客户端记者回访到张恒。张恒，1988年生人，是一名党员。2012年，他单独顶岗加入郑州快速公交这个大家庭。作为郑州B6路内环车长，张恒荣获2017年总公司优秀共产党员，2018年总公司标兵等荣誉，工作中以“对待乘客热心，帮助乘客诚心，照顾乘客细心，服务乘客真心”为服务准则，在平凡的岗位上孜孜不倦的工作着，曾多次获得郑州市快速公交公司优秀共产党员。和张恒聊天采访时，他很谦虚。发生在他身上的正能量故事他一句未提。但其实，他干的好事一箩筐。今年元宵节当晚，张恒下班不回家，开着私家车帮智障少年找亲人;2018年1月底，返乡农民工的血汗钱遗失公交车上多亏张恒和热心乘客帮忙送还;2018年12月下旬，不忍心看环卫工人大雪中挨冻，张恒自费购买棉帽和手套送环卫工人……张恒说，他是农村人，他的父母爷爷奶奶也都是环卫工年龄段的人，他能体会到家人劳动的不易和辛苦。“有时自己动动嘴皮子，花点小钱，但对于别人来说可能就很温暖。”张恒说，他当过兵，在公交岗位上又是五星车长，“我应该起表率作用，带好头!这也是我应该做的。”他车上从未发生过乘客跌倒事故，7年车长生涯始终保持“零投诉”“乘客满意，才是最好。”这是他经常说的一句话，在平时的工作中，他尊重乘客，态度和蔼，特别是高峰期或遇特殊人群乘客时，他都会灵活处理并给予特别照顾。遇到老人上车时，总是将车多停一会，待老人上车找好座位坐稳后才继续开车，遇到未及时赶到的乘客也会稍等会，为了让乘客满意，工作中他不断积累经验，完善服务。正是由于他热情周到的服务，他的车上至今没有乘客跌倒摔伤的事件发生，他一直保持“零投诉、零事故、零违章”的良好成绩，得到乘客和同事的一致好评。为了让乘客有个舒适、方便、快捷的乘车环境，他利用休息时间清理车厢卫生死角，坚持箱板一趟一拖，他觉得一个人优秀不算啥，大家一起进步才是好，积极主动的另外两辆公交司机结成帮扶对子，针对对方的缺点(不注重车辆卫生、车速快)，他积极地和对方一块就车辆卫生和驾驶习惯进行整改，每天督促和帮助他们慢慢养成勤快、遵章的好习惯，月月上星!同一线路的同事在运营中，在郑州市长江路连云路发生客伤事故，车长带乘客去医院看病，车辆停放路边无人看管，晚上八点多，正在吃饭的他接到调度员电话立刻赶到事故现场将车辆开回电厂路厂区，由于最后一部车已发出，他只能打的回家。&gt;&gt;&gt;网友评论网友“撰稿人翟文龙”：为郑州公交司机点赞!网友“石头大叔”：社会需要你这样的正能量，感动满满!网友“漂浮的我们”：我多少次想这样干，但碍于怕引起纷争，我只能忍了。请大家原谅我。网友“武汉轻舟”：这样“顺手”的人不少，不仅仅只是司机，还有高空，还有地面。每次没有直接看到，或者不方便去追，只能凭空生气。这事得有人管，至少高清探头应该担当大任。否则，这种不自觉的人不会自觉。为公交司机点赞!",
              "com": "大河报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34313"
            },
            {
              "time": "2019-03-26 10:58",
              "title": "江苏发现珍稀凹耳蛙，给“超声助听”以有益启发",
              "id": "5c99a41694840af4ac09cde2",
              "content": "[摘要]全世界目前仅发现两种会发出超声波的蛙，其中一种就是我国的凹耳蛙。3月20日到25日，中科院生物物理研究所科学家沈钧贤、徐智敏夫妇来到宜兴作科学考察，接连在张渚镇茗岭村黄塔顶度假山庄、太华镇太华村等一带发现珍稀野生动物凹耳蛙。这是在江苏境内首次发现该物种，证明凹耳蛙在宜兴南部山区的分布较为广泛。凹耳蛙的长相类似普通青蛙，以耳部凹陷、形成外耳道为特征，是我国特有物种。凹耳蛙的生存条件较为苛刻，对海拔、温度、水质等要求都较高。它们的冬眠时间短，3月份就开始活动，气温高时不容易见到。此前，已在浙江、安徽两地发现了凹耳蛙。记者了解到，近20年来，沈钧贤、徐智敏夫妇致力于凹耳蛙的研究。由于凹耳蛙主要在夜间活动，夫妻俩经常于夜间在山区原野的水沟等地做实地考察，并在实验室进行了一系列科学研究。2012年，他们关于凹耳蛙的研究成果获得国家自然科学奖二等奖。江苏省境内有没有凹耳蛙呢？“2018年6月，来到属于天目山余脉的溧阳山区寻找凹耳蛙，但没有找到，可能是气温已经太高的缘故。”年已78岁高龄的沈钧贤说，后来，又来到宜兴市博物馆参观。在与文博志愿者吕顺芳交流的过程中，提到寻找凹耳蛙一事。吕顺芳便建议我们次年早点到宜兴市张渚镇的黄塔顶一带寻找。黄塔顶素有“苏南第一峰”之称，山上主要是毛竹，生态环境优美，山下长寿老人很多。今年3月20日，沈钧贤、徐智敏来到宜兴，在志愿者朱洪明、任润芝等人陪同下，他们一起寻找凹耳蛙，果然在张渚镇、太华镇的山区找到了众多凹耳蛙。值得一提的是，3月22日晚上，在黄塔顶度假山庄后面的涧沟里，沈钧贤不时发出短暂的“嗤”“嗤”高频声，引得凹耳蛙纷纷回应，发出“叽”“吱”小鸟般的叫声。“这是一种罕见的生物现象。我们还发现了抱合在一起的雌雄凹耳蛙，共见到两对。我们把特殊的录音笔绑在棍棒上，伸到蛙的身边，近距离录制凹耳蛙的叫声。这种录音头是进口的，可以同时记录人耳听到的声音和人耳听不到的超声波。”沈钧贤说。沈钧贤介绍，会发出超声波的蛙，全世界目前仅发现了两种，一种是北加里曼丹的涧蛙，另一种就是我国的凹耳蛙。实验证明，凹耳蛙能发出20千赫以上的超声信号。这种技能可与蝙蝠、海豚相媲美。沈钧贤、徐智敏夫妇经过多年研究发现，作为两栖类动物，凹耳蛙竟有与人类类似的耳道结构，这为改革现有的助听设备、给聋人进行“超声助听”提供了有益的启发。此前，沈钧贤已与多学科的专家进行过这方面的合作探讨。（原题为：《江苏发现珍稀野生动物凹耳蛙》）",
              "com": "科技日报",
              "href": "https://gongyi.qq.com/a/20190326/005023.htm"
            },
            {
              "time": "2019-03-25 10:49",
              "title": "合肥患渐冻症的千万富翁去世，捐献器官救六人",
              "id": "5c98529a9484db57c329d51d",
              "content": "[摘要]患渐冻症的千万富翁走了，他的器官却在别人身上存活了，给别人带来生的希望。合肥千万富翁武建平身患渐冻症，全身瘫痪仍坚持用眼睛“写自传”。这一励志故事经新安晚报、安徽网、大皖客户端报道之后，引发社会各界广泛关注。遗憾的是，3月18日武建平突然昏迷，21日不幸离世。武建平走的时候，没有说任何话，生前唯一愿望就是捐献遗体。22日，武建平遗体捐献，将给六个人带来希望。本文图片均来自安徽网1、抢救昏迷的四天三夜里亲友轮换为他守夜3月18日清晨6点45分，武建平照例在朋友群里发了一句：“大家早上好”。“随后我就帮他在康复床上活动身体了。”武建平的爱人胡昌云事后回忆说，当日护工身体不舒服没有来，家里就夫妻俩在。到了上午10点左右，武建平突然昏迷不醒。“他的心跳都停了。”当时她慌了，一边打120求救，一边找亲戚帮忙。“医生到了就在现场抢救，谢天谢地，那时心跳又恢复了一点。”胡昌云说，在医生的帮忙下，武建平被紧急送往中国科学技术大学附属第一医院南区的重症监护室抢救。家人签署《捐献确认登记表》“我听说这事情之后，放下手中的生意赶紧去医院探望。”市民杨宏文回忆说，当日深夜，他赶到重症监护室门口，就看到一个瘦弱的女人在角落的凳子上缩成一团，怀里紧紧抱着武建平平时穿的衣服，她就是胡昌云。“当时我眼泪都下来了。”杨宏文说，他力劝胡昌云回家休息，自己就在监护室门口守着，每隔一段时间，杨宏文就给胡昌云打个电话报平安，一直到手机没电。第二天，武建平在抢救的消息很快在他的朋友圈里传开来，朋友们纷纷为他祈福，期待他挺过难关。远在北京的知名书法家周应辉专门写道：“武建平是我带出来的众多弟子之一，从‘一无所有’到成为一个小有成就的人，很不易很不易……从去年开始，他建立起重新开始一切的信念，靠眼视仪来阅读外部世界，来和每一个愿意与他沟通的人交流，还积极建群并在群里群外积极热情地探讨人生，且坚持写作，还陆续通过自己的微博与公众号发表了一些文章。为了写好文章，他经常与我不厌其烦地探讨和交流……真的不易啊，一个靠眼视仪和人和这个世界交流的人！以前我做过他的师傅，如今对比之下，他却给了我无尽的勇气和力量。”胡昌云和亲友24小时轮换着守在监护室外面。“医生经常委婉地跟我说，他（武建平）估计醒不过来了，我不想放弃治疗。”胡昌云说，就这样，直到21日。2、捐献忍痛说服公公婆婆含泪完成爱人遗愿3月21日，正是春分时节，可胡昌云一点都感觉不到暖，因为武建平仍然没有醒过来。“他昏迷之前，没有一句遗言。”胡昌云说，丈夫是个知恩图报的人，昏迷的这些日子里，这么多亲朋好友都在关心他，这是一份情谊。“他生前跟我说的唯一愿望，就是他去世之后，把遗体捐献出去。”胡昌云回忆说，所以，她鼓足勇气跟公公婆婆说了。婆婆是个传统的人，她一时接受不了儿子去世后器官被移植。“我劝了好长时间，最后公公婆婆都同意了，他们点头之后，两个人哭得不成样子。”胡昌云说，当日下午，她就提出了丈夫遗体捐献的意愿。亲人悲痛欲绝“当时我接到重症ICU的电话，一位逝者有捐献器官的意愿。”中国科学技术大学附属第一医院医务处中国人体器官捐献办公室（以下简称OPO办公室）的协调员曹静回忆说，当时她就和胡昌云见面了，一聊才知道武建平的遗愿。“他一直有这个意愿，可因为身体原因，不能够自己去捐献。他的事迹感动了很多人，他以健康的心态回馈社会，很了不起。”曹静回忆，经医院脑损伤判定专家组评估，此时的武建平符合脑死亡，已达到捐献状态。当日下午4点，患者所有近亲属签署了《捐献确认登记表》，同意捐献其全部器官。经评估，OPO办公室计划于3月22日下午1点行器官获取手术，拟获取器官：肝脏、一对肾脏、胰腺、一对角膜，将挽救4人的生命，为2人送去光明。其中，武建平的胰腺器官移植，在该医院尚属首例。“从2017年到现在，我们医院做了60多例的器官捐献。每年有30万人在等待移植，遗体捐献太重要了。”曹静说。“这家人很了不起。”曹静强调，胡昌云的儿子还在高考关键阶段，签《捐献确认登记表》的时候需要家人所有身份证，胡昌云的儿子因为高三，身份证在学校，他硬是自己来到了医院。“我看胡昌云在签字的时候，手都是抖的。”曹静回忆说，胡昌云内心其实非常悲伤，可她还是忍着悲伤说服了公公婆婆，完成了爱人的遗愿。3、移植人们来送最后一程他为六人带来希望昨日中午11时许，新安晚报、安徽网、大皖客户端记者来到了中国科学技术大学附属第一医院南区的重症监护室门口，当时门口已经聚集了很多人，移植手术很快就要开始。一向坚强的胡昌云这时撑不住了，她倒在椅子上哭了起来。下午1时许，医生们将武建平的遗体缓缓推出了重症监护室。当看到手术床往手术室推动，很多人都尾随在后面，看武建平最后一眼。在手术室门口，胡昌云紧紧扒着武建平的手术床，摸着他的头大哭说：“你走了，你走了。”看到这一情景，很多人眼圈都红了。手术之前，手术医生向武建平深深地鞠躬。“手术如果成功，他的生命通过另一种方式延续了。”武建平的一位朋友说道。医生们集体鞠躬经过几个小时的手术，昨日下午3时54分，医院的姚自勤主任告诉新安晚报、安徽网、大皖客户端记者，器官捐献手术顺利结束，器官移植（肝、肾移植）都已经开始，胰腺正在通过高铁转运。这些器官给6个患者带来新的希望。“武哥这个人吧，哪怕自己身上的刀口在流血，也能安慰别人。”一位朋友知晓手术成功后说道，“他通过另一种方式新生了。”中国红十字会的徐女士告诉记者，武建平是从2013年到目前安徽省第249个器官捐献者。“他不会被人忘记的，他的名字将被刻在陵园里，接受人们的感恩。”徐女士说。“他的器官在别人身上存活了，给别人带来生的希望，对我来说，他就没有死，他一直活着。”胡昌云说，接下来，她还要为丈夫做很多事。昨日深夜，胡昌云用丈夫的微信号，转发了本报刊发的内容，很多朋友感叹：“武建平还活着。”（原标题：那位渐冻症千万富翁走了，捐献器官为六人带来希望；武建平昏迷4天不幸离世，他捐献遗体的遗愿昨日实现，让生命以另一种形式绽放）",
              "com": "新安晚报、安徽网、大皖客户端",
              "href": "https://gongyi.qq.com/a/20190325/003741.htm"
            },
            {
              "time": "2019-03-24",
              "title": "老太带推车乘公交 司机常帮抬 8岁小孙子帮奶奶写了封感谢信",
              "id": "5c98525c9484db57c329d1f2",
              "content": "<img src='http://app2.showapi.com/img/publicwelfare_img/20190325/0ae4afbb-93e1-49f5-a7c2-78bfd10bbe0c.jpg' />■热心司机停车后帮忙把老太太的推车抬上车。监控截图初学毛笔字的小学生用毛笔写的感谢信。公交工作人员供图本报讯（记者刘琛敏）“我奶奶腿不好，她坐102路公交车时司机叔叔们经常帮奶奶把推车抬上车，感谢热心的司机帮助我奶奶。”3月18日，公交101路车队收到了一位名叫李子航的小同学用毛笔写的感谢信。据了解，李子航的奶奶秦老太太今年75岁，经常去老友林老太太家串门儿，乘坐102路公交车往返于自家和林老太太的家。“上岁数了，走两步就得歇会儿，所以儿子给买了辆手推车，平时出门我就推着它，车座底下放着水杯、急救药、提包、手机什么的，还挺沉，每次我坐102路车，司机都会下车帮我把推车抬上去，挺感谢人家的。”秦老太太说，她跟她的小孙子说过，他就给写了封感谢信。“写就写吧，他才8岁，刚开始学写毛笔字，就非要用毛笔写，写得歪歪扭扭的。”秦老太太坐车次数多了，时间长了，司机们基本都对老太太有了印象。知道她上了岁数腿脚不好，司机们都主动帮她将推车抬上抬下，帮忙找座位。3月16日，秦老太太再次乘坐公交车，11时23分，她从常青园站上车，司机闫师傅下车帮她将推车抬上车。当车行驶至和平世家站，秦老太要下车时，闫师傅习惯性地打开驾驶室门想去帮她抬推车，而此时，一名热心的男乘客已经迅速出手相助，将推车抬下了公交车。司机闫师傅对记者说：“102路车每天都有很多老年乘客乘坐，老年人行动不便，帮忙是应该的。每当这时我总想起自己的老母亲，今年她也年过七旬，但是却已瘫痪在床，无法出门，看到这么大岁数的老太太还能自己出门活动感觉挺羡慕也挺欣慰的。再说这位老太太总坐车，我们都认识了，不管是哪辆车的司机看到她，都会主动来帮忙。”",
              "com": "燕赵晚报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34302"
            },
            {
              "time": "2019-03-24",
              "title": "“既然给了人家希望就要去捐献”",
              "id": "5c98525c9484db57c329d1f0",
              "content": "捐献前张薇（右）接受奉贤区红十字会副会长颁发“博爱之星”奖杯。青年报记者刘春霞摄“没想到这么快就有了匹配成功的消息，这对她和她的家庭来说是一个希望，既然给了人家希望就要去捐献。”3月18日上午，上海第二工业大学的“95后”学生张薇在上海第一人民医院捐献造血干细胞，为一名异地白血病患者送去了生的希望。她也成为上海第435例、上海第二工业大学第12例造血干细胞捐献者。青年报记者刘春霞“答应的事情一定要去做”张薇是上海第二工业大学应用统计学专业大四学生，平时在同学的眼中，她是一个安静的姑娘，品行端正、待人和善、学习认真刻苦。虽然话不多，但在各种实践活动中都能看到她的身影。她积极参加学校社会实践项目，参与各项暑期社会实践活动、参与上海市救助满意度调查、上海市常住人口就业状况调查以及上海市第四次经济普查等多项活动，在校期间还曾2次参加义务献血。2016年5月，张薇参加了“大爱相‘髓’——上海第二工业大学造血干细胞捐献志愿者”活动，积极加入了中华造血干细胞捐献者资料库，成为一名志愿捐献者。今年春节前几天，她接到了上海市红十字会的电话，告知她与一名患者血型初配型成功。“接到电话的时候第一反应还是挺惊讶的，没想到会这么快，当时跟对方确认了好几次。”张薇坦言，妈妈起初担心自己的身体，不太同意捐献，“她看了网上的一些说法，觉得会对我的身体有影响，不太放心，后来我也查了很多资料，帮她做了好多心理建设。”张薇透露，自己这次捐献属于比较紧急的捐献，对方的具体情况自己并不了解，“只知道是外地的一个小姑娘。”临近捐献，张薇也难免有点紧张，她一方面跟医生了解捐献过程、时间以及后续注意事项，另一方面也向一些捐献过的志愿者“取经”，“整个了解下来，觉得自己还是能接受的。”张薇说，白血病对一个孩子和一个家庭来说都是灾难，“（和我）匹配成功对她和她的家庭来说就是一个希望，既然给了人家希望就要去捐献。”她认为，想加入中华造血干细胞捐献者资料库的志愿者都要在入库前考虑清楚，“入库就相当于把别人的一个希望放在了里面，当别人需要这个希望时，你再退缩就是打碎别人的希望。”捐献后一般需要休养一段时间，而三、四月正是企业招聘人才的黄金期，当被问及是否担心会因此错过好的就业机会时，张薇说，当初报名做志愿者就做好了心理准备，答应的事情一定要去做，“能匹配成功是一件蛮幸运的事，能帮助到她和她的家庭我挺高兴的。”二工大有近5000名师生“入库”2003年12月27日，上海第二工业大学在青年学生中组建了“上海第二工业大学造血干细胞捐献志愿者服务队”，志愿者们通过邀请专业人士举办知识讲座、发放宣传册、深入寝室进行宣讲、成功捐献造血干细胞的同学现身说法等形式，帮助同学们了解中华造血干细胞捐献者资料库和通过捐献造血干细胞拯救白血病患者生命的基本情况和相关知识。迄今为止，二工大已有近5000名师生加入中华造血干细胞捐献者资料库。上海第二工业大学党委书记宋宝儒介绍说，学校在多年立德树人的过程中，把服务社会、为社会有困难的人提供力所能及的帮助也纳入大教育中，历年来有很多同学积极入库，而自2003年以来，二工大已经有12位学生成功配对，创沪上高校造血干细胞成功捐献之最。“这次张薇同学义无反顾捐献，我们为她感到骄傲。这是她的大爱，也是学校多年来立德树人培养的结果。”宋宝儒说，希望这样的活动能有更多人加入进来，学校也会对有爱心的同学进行一定褒奖。近年来，造血干细胞捐献者都先后被授予象征校内最高荣誉的校长奖。正式捐献前要经历好几次的分辨率配对试验，会有充分的时间考虑，有的人在这段时期会动摇，最终拒绝捐献，而二工大的学生们得知初配成功后，都积极排除各方面的阻力，特别是做通家长工作，如杨晨筠通过“家庭会议”进行投票表决获得父母的同意后进行捐献；吴承根“串通”父亲一起瞒着母亲进行捐献；沈寅、陈海华在毕业前夕坚持先完成造血干细胞的捐献再考虑求职；曾泉峰通过医学数据努力说服了有疑虑的父母，争取在最佳时机进行捐献；戴振伟九次无偿献血的事迹是捐献造血干细胞前夕市红十字会通过系统查询才被大家知道。",
              "com": "青年报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34303"
            },
            {
              "time": "2019-03-24",
              "title": "最美夫妻”回忆火场逃生 病房里丈夫唱起爱的歌",
              "id": "5c98525c9484db57c329d1ef",
              "content": "<img src='http://app2.showapi.com/img/publicwelfare_img/20190325/0b6ae18d-73af-4255-9ab4-94443d3d47b0.jpg' />昨日，在火场中互救的小夫妻躺在病床上相互鼓励，表示要更加珍惜彼此。辽沈晚报、聊沈客户端记者曲值摄即使脸上的皮肤因为烧伤颜色深浅不一、长发也已经剪去，在李硕眼里，23岁的妻子王雪笑起来依然是手机中那个最漂亮的古装女孩的样子——那是受伤前，王雪一时兴起拍的小视频。因为在火场中冒死互救逃生，这对几天来在很多人手机里被刷屏的小夫妻被誉为“最美夫妻”。而现在，他们面临着医药费、康复费的巨大压力。回忆火场逃生当时就像在炼丹炉里2019年2月28日凌晨，沈阳市铁西区开发大道一栋住宅楼的5楼突然失火。“大概是半夜2点左右，我先被声音惊醒了，我把爱人推醒，到客厅里一看，外面已经都是烟了。”王雪回忆。小两口赶紧披上衣服准备往外跑。“我的身体好，每天都得爬个几百层的楼梯。当时就想，我媳妇跑得慢，让她在我前面，我在后面护着她。”24岁的李硕是一名外卖小哥，他回忆说。打开房门，就是一股热浪，李硕首先挡在王雪身前，再从身后护着她往下跑。“我跑到一楼之后才发现，李硕没跟出来。”王雪又反身跑回去找自己的爱人。“楼道里都是浓烟，什么都看不清，我就趟着走，然后发现他躺在地上了。我边喊边去拽他，他当时应该是接近昏迷了，用很小的声音说‘别管我，快跑！’当时楼道里的温度特别高，那个感觉就像是在炼丹炉里。”王雪说。最终，小小的王雪把李硕从楼道中硬拽了出来。两人被随后赶来的救护车送到了沈阳消防烧伤医院。“最美爱情”是平淡幸福病房里响起爱的歌声“我应该是个子高，肺活量也大，当时是被烟熏的。本来想护着媳妇的，老爷们不就是应该护着媳妇么，结果倒是被我媳妇给救了。”“没多想啊，回去救他就像是本能一样。”谈起火场冒死互助，小两口表示。李硕和王雪都是沈阳市法库县人，两人所在的村子离得不远。“最早是2011年认识的，那时候还小，我陪着我朋友、他陪着他哥们见面处对象。结果最后我们的朋友没成，我俩成了。”王雪笑着说。2015年两人正式确定了关系，到2017年8月结婚。“他追的我，主要就是给我唱歌。他唱歌特别好听，就是我的偶像，我想听什么或者出了啥新歌，他就去学。听他唱歌，我的心里就特别欢喜，”王雪说，“结了婚就是过日子，没有什么大富大贵。他特别能干，而且心疼我。回家那么晚还收拾屋子、下厨做饭，我最喜欢他下厨时给他打下手。”“她本来胃不好，但是每天都要等我回家一起吃。”李硕说。这段网友们称为的“最美爱情”，在小两口眼中，其实都是这些“特别平淡的小幸福”。“老公辛苦了，谢谢你那么累，还照顾我，有时候还容忍我的小脾气。”说着说着，眼泪从王雪的眼角滑过。“其实结婚之后，一直没有给你好好唱过歌。‘我爱你一定爱到花都开了，鸟儿把歌唱，爱到牛郎织女为我们点头，爱到花儿绽放鸟儿成群把我们环绕，爱到每道彩虹映出你的美’，我现在唱给你听。”听着妻子的真情告白，李硕轻轻哼着。病情已稳定后续治疗还需巨大花费“在医院里，李硕从昏迷中醒来的第一句话就问妻子怎么样了，这让我们特别感动。”沈阳消防烧伤医院烧伤科刘慧文主任介绍。“他们两个是2月28日凌晨被送来的，我们当时就开通了绿色通道进行救治。诊断结果是王雪全身烧伤面积达12%，李硕烧伤面积15%，二人均属于Ⅱ度至Ⅲ度烧伤。烧伤主要在四肢部分，头面部烧伤比较轻。目前看恢复得还不错，小两口平时特别乐观，而且很坚强，现在就开始康复锻炼了。”刘主任表示。目前，夫妻二人的医疗费用已花了近10万元。医生估计后期治疗、康复费用还会更高。“房子是2017年家里人帮着买的，现在每个月得还2000多元的贷款，我们两个才结婚不到两年，也没有什么积蓄。现在这治疗费用都是双方家里四处借的。也有人帮着给我们在网上发起了筹款，但效果现在还没体现出来。”为此，李硕还曾偷偷跟家人说，有钱先救媳妇。如果您想帮助这对小两口，请拨打王雪电话：13940330746。辽沈晚报、ZAKER沈阳记者隋冠卓",
              "com": "辽沈晚报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34304"
            },
            {
              "time": "2019-03-24",
              "title": "装有重要证件的小挎包丢失，急坏了失主 好心的哥捡到主动上交",
              "id": "5c98525b9484db57c329d1ee",
              "content": "<img src='http://app2.showapi.com/img/publicwelfare_img/20190325/8c0555bf-412b-4000-81be-1da43487d54c.jpg' />工作人员给记者看包内物品。一个藏蓝色的小挎包，内装户口本、道路运输资格证、结婚证、养老保险、采挖虫草资格证等一系列重要证件，在虫草季快要到来，一家人的主要经济来源就是靠采挖虫草。在这个当口，对于这个丢失了藏蓝色小挎包的失主来说，无疑是一件万分头疼的事情。文/图记者次吉藏蓝色小挎包落在出租车上近日，拉萨市两家出租公司联合成立的失物招领中心，收到藏AT5273出租车驾驶员马全海主动上交的一个藏蓝色小挎包。藏蓝色小挎包是马全海在进行交班前检查工作时发现的，置于后排脚垫处，当时马全海既不清楚包是哪名乘客遗失的，也不知道该怎么返还，就第一时间赶往公司上交失物。随即失物招领中心工作人员将包妥善保管，等待失主前来认领。这个小挎包在失物招领中心放了两天，却一直没有人前来认领，按照工作流程，工作人员开始进行登记工作，打算将包保管起来。但打开包时工作人员才发现，内装物品均为重要证件。“当时我们也挺担心，这么多证件丢了，失主肯定很着急。”失物招领中心工作人员说。在无人认领，又不清楚失主身份的情况下，工作人员只能拿着包内装的相关证件来到公安部门，希望能够尽快找到失主。在公安部门的帮助下，工作人员取得了失主扎西次仁（化名）的联系方式，并第一时间与他对接。失物招领中心积极寻找失主记者了解到，扎西次仁是那曲市比如县居民，前几天来拉萨市办事，在乘坐出租车时，不慎将包遗失在车内。包丢了之后，万分着急的他到处寻找，却因记不清丢失地点，一直没有找到。因时间问题，他只能放弃寻找，赶回家里。但就在这时，他接到了出租公司的电话，随即委托自己的朋友前来领取自己遗失的小挎包。“我自己也记不清包是在哪儿丢的，所以也没有报案。包里面还装着全家的户口本，我都绝望了，没想到还能找回来。我现在真的很激动，非常感谢这名主动上交物品的司机，也很感谢出租公司所有工作人员的热心帮忙。”扎西次仁说。听着电话里失主激动的声音、质朴的话语，失物招领中心的工作人员都很开心，纷纷笑道：“帮助别人是一件让人很开心的事情，接下来工作的日子，又将充满干劲。”“接到失物招领中心工作人员打来的电话，说是找到失主了，我很开心。这么多重要的证件丢了，谁不着急啊。希望以后乘客坐车时能妥善保管好随身物品，别再发生这种事情了，不然要是东西被其他乘客捡走那就麻烦了。”出租车驾驶员马全海说。",
              "com": "西藏商报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34305"
            },
            {
              "time": "2019-03-24",
              "title": "捡到手包交到收发室 他说没想到会受表扬",
              "id": "5c98525b9484db57c329d1ec",
              "content": "“如果我个人力量找不到，那就最好能在学校升旗仪式提及这位拾金不昧的好学生，一定要找到这位好学生，学校有这样的好学生，让人太欣慰了。”3月13日下班后，辽宁省实验中学李凤梅老师将给学生上课用的讲课资料弄丢，心急如焚时，接到了学校保安的电话，一名学生捡到手包并交到了收发室。3月13日晚上，李凤梅在下班途中将手包弄丢，直到回家才发现。然而，她却回忆不起来到底丢在哪了。当天晚上，她心情很糟糕，手包内有身份证、驾驶证、各种银行卡，最重要的还有给学生上课用的讲课资料在U盘内。银行卡补办就可以，但学生上课会受到影响，怎么办？她为自己的粗心大意十分懊恼。就在她一筹莫展时，李凤梅接到了一个电话，学校收发室说有人捡到了她的包，让她来认领。据保安说，是一名学生，问他名字和联系方式，男孩说不用了，找失主要紧，就离开了。李老师查监控发现，13日18时50分，她在学校西门不慎将手包掉在地上。一名穿校服的男学生路过捡到，直奔收发室走去。李老师截了图，回去发了朋友圈，本以为朋友圈内都是本校的老师和学生，寻找一名学生是件很容易的事，可是几天过去了，一点儿消息都没有。李老师向校领导汇报了这件事情，并表达了想找到该学生致谢的意愿。3月18日上午，学校举行全校师生升旗仪式，省实验中学团委梁书记向全校师生发出寻找拾金不昧好学生的动员，关校长通知班主任帮忙寻找拾金不昧的学生，并宣布学校要对这名学生进行表彰。功夫不负有心人。18日15时许，拾金不昧的学生找到了，他是高二八班的邴唯扬。李凤梅握着邴唯扬的手，一再感谢。邴唯扬没想到，这样一个他认为很平凡的举动，会被老师寻找还能受到表扬。邴唯扬回忆，当天他下课往回走时发现地上有一个女士手包，他担心被别人捡到，立刻走过去将包捡起，然后就交给了学校门卫收发室。“这就是一件再小不过的事情，不值得受到表扬。”沈阳晚报、沈报融媒主任记者李远主任摄影记者常晟罡",
              "com": "沈阳晚报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34306"
            },
            {
              "time": "2019-03-24",
              "title": "餐厅因拆迁停业 老板手绘漫画贴店外 通知会员们来退费",
              "id": "5c98525a9484db57c329d1e7",
              "content": "由于店面即将拆迁被迫停业，高新区一家餐饮店的老板在闭店的第一时间向所有会员发出了通知，他还特意手绘了漫画贴在店外，在解释闭店原因的同时也告知会员及时前来退款，这件事不仅让拿到退款的会员感到温暖，这位老板的诚信之举也收获了不少网友的点赞。餐厅停业老板喊会员们来退费昨日记者来到这家位于唐兴路附近的餐厅看到，这里已经关门歇业了，店门玻璃上的“通知”称自3月18日起该店停止营业，请持有本店会员卡的顾客尽快与店主取得联系退还卡内余额，“通知”上还留着店主的电话和微信号。这则通知的下面还贴着四张A4纸大小的手绘漫画，讲述了这家餐厅自开业起受到了众多食客的认可，但是目前店铺即将面临拆迁，老板只能挥泪与大家告别。按照“通知”上显示的电话号码，记者联系了这家餐厅的老板。他叫张哲，是位“90后”，开餐厅前是一位健身教练也是一位营养师，两年前开了这家健身营养餐厅。得知有网友将自己用漫画解释闭店原因、主动贴通知告知会员退费一事发到网上，且自己的诚信之举得到众人点赞后，张哲憨憨一笑，淡然地说，“我们店里有很多回头客，时间长了我和大家就建立了很深的感情，大家都是兄弟姐妹，要不是店铺要拆迁，我也舍不得闭店，既然现在必须要这么做，我就得给消费者一个合理的交代，把会员卡内未消费的余额退还回去是最起码的，开店做生意诚信不就是最重要的吗？”张哲说，他的餐厅面积并不大，但是固定的会员有近百名，有办理季卡的，也有办月卡和周卡的，充值的金额也从几百元到几千元不等。3月18日闭店当天他就在会员微信群内发布了退款消息，也逐一电话通知了会员，因为有些会员更换了电话号码，他也担心有些会员没有看到微信，他就自己手绘了漫画，打印了闭店通知贴在店门上，希望没有接到通知的会员能与他联系。不管等到什么时候，只要有人找他，他都会核实信息和金额后第一时间用微信转账的方式向大家退款。现在，张哲已经退还了大部分会员的预付金额，目前，还有十几位会员未办理退款，他希望借助媒体和网络的力量让这些人看到这则消息，尽早办理退款。老板讲诚信大家齐点赞吴女士是张哲餐厅店内的常客和会员，接到张哲的电话她才知道这家店要关门了。“老板专门打电话通知退款，这事真是不多见，现在好多店一关门老板就跑路，人去楼空找不到人，这种诚信真难得。”吴女士说，自己在高新区上班，平时的午餐基本都是在张哲的店里解决的，接触时间长了，她觉得张哲这个人很实在，不仅店里的用料很实在，而且做事做人也很真实。“收到老板的微信通知后，他很快就把会员卡上剩余的2000元转账给我了。”王先生说，当时办卡时，他还开玩笑地问老板会不会突然关门停业，没想到门店真的停业了，但这次他要为商家点回赞。昨日，记者采访了几位收到退款的会员，他们对于张哲的做法是齐齐称赞。“没想到突然接到退款电话，还表示歉意，添加对方微信号后，剩余300多元有零有整的全部退回来了。”刘女士说，这让她感到很意外，很惊喜，老板讲诚信守信用，这是文明社会遵守契约精神的体现，给人以正能量，以后他要是还开店，自己还会去办会员卡。不仅如此，不少网友也直言：“好人啊，良心老板。”面对大家的称赞，张哲表示，在他看来理所应当的事情得到了这么多人的关注让他很意外，他说，由于自己的原因造成顾客的不便，已经很不好意思了，顾客在店内消费储值，就是对自己最大的信任，决不能辜负了他们的信任。文/图记者龚伟芳实习生何欣月",
              "com": "西安晚报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34307"
            },
            {
              "time": "2019-03-24",
              "title": "公交司机路边灭火好专业",
              "id": "5c98525a9484db57c329d1e5",
              "content": "“快递车着火了停在路边，一位公交车司机马上从车上拿来灭火器帮忙灭火。火灭了之后，这位做好事不留名的司机就离开了……”昨日中午，市民吴先生致电本报市民热线5589999，说他经过海湾公园附近时看到这一幕，司机的救火过程非常专业。记者随后辗转联系到救火的公交司机韦凯，他说:“当时十万火急的，我脑子里除了赶紧救火也没想别的，只要人和车没事就好。”记者陈军起火货车已驶离现场地面还留有烧焦的灰烬昨日中午12时左右，记者赶到事发现场时，公交车和起火的快递货车都已驶离现场，路段已恢复正常通行。着火地点位于湖滨西路辅路与厦成线的岔路口上，距离海湾公园公交站不到二三十米。记者看到，为了避免影响正常通行，起火货车当时停靠的位置在两条干道之间的急停区域。现场地面上还留有一些烧焦的灰烬以及灭火器喷出的干粉，走近时还能闻到淡淡的焦烟味。“我忽然看到前边起了很多浓烟，原来是一辆货车着火了，停在路边。”在海湾公园周边摆摊的商贩王先生说，火灭了之后不久，货车就开走了，前后共持续不到15分钟。公交司机看到有车着火停好车抄起灭火器冲上前昨天下午5点多，在31路公交车终点站报业大厦停靠点，记者见到司机韦凯。韦凯说，当时他正驾驶31路车从厦港公交场站发车没多久，沿着湖滨西路辅路行驶时，远远就看到前方有一辆中型货车冒烟，越开越近时，才确定那是一辆快递货车着火了。韦凯说:“当时我看到两人手上拿着衣服，对着起火的地方一个劲儿猛扇，可能车上没有灭火器，这样不仅灭不了火，还可能让火势蔓延。”见状，他立即靠右停下公交车，打开双闪指示灯后，抄起车上的干粉灭火器，跑到货车旁帮灭火。灭火后，韦凯检查发现，原来是车头与货箱之间的空气滤清器过热起火了。他说，如果没有及时扑灭，火可能一直烧到发动机，后果不堪设想。韦凯说，快递货车司机拉着他的手，不停感谢:“幸好你出手相助，不然火不可能这么快扑灭掉，后边的快递货物也可能烧着。”韦凯向货车司机叮嘱了几句，就驾驶公交车离开现场。（报料人:吴先生报料费:30元）",
              "com": "厦门晚报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34308"
            },
            {
              "time": "2019-03-24",
              "title": "40多年前婆婆、丈夫相继去世 72岁好儿媳赡养百旬公公传佳话",
              "id": "5c98525a9484db57c329d1e3",
              "content": "43年前清丰县大屯乡店上村29岁农村媳妇乔贵巧，遭遇祸事连连，婆婆患重病去世不久，丈夫逯法林从房上摔下抢救无效死亡，当时家庭极度贫困，面对幼小儿女和60多岁公公，乔贵巧不离不弃，用自己双手撑起一片天，把儿女养大成人后，继续精心赡养公公。她40多年如一日，在家庭困难情况下，孝敬善待公公；如今72岁的她依然独自照顾100多岁公公，被孝乡清丰的乡里乡亲传为佳话。东方今报·猛犸新闻记者宋明增/文图屋漏偏逢连阴雨灾难不断愁煞人乔贵巧不到20岁时，经人介绍嫁给逯法林。虽然家庭不富裕，但丈夫踏实能干，结婚不久，相继添了一双儿女，知足的她当时感觉小日子还挺美满。谁知女儿生下来没多久，婆婆检查出癌症，四处张罗借钱给婆婆看病，婆婆还是没留住最后走了。因给婆婆看病留下好多外债，夫妻除了在生产队劳动挣工分，还到砖厂干活挣钱还债。屋漏偏逢连阴雨，当时29岁的乔贵巧，遭受了她人生中天塌了似的打击。丈夫在给村里村民盖房时，不慎从房上摔下，伤势过重，抢救无效死亡。哺育儿女孝敬公公用双手撑起一片天婆婆患病难治，丈夫盖房摔下先后离世，丢给乔贵巧的是重如山的压力：嗷嗷待哺一双儿女，60多岁身体患病的公公，还有一贫如洗家庭……当时土地还没有承包到户，乔贵巧为了养活一家人，在生产队里比一个男人还拼命，每天早上，乔贵巧天不亮就起来，做好饭，争取第一个到地里干活。秋天棉花摘到手疼得抬不起来，最多时能摘50多斤；推平板车拉庄稼堆得像小山一样比男人拉得还多……中午和晚上回家做好饭，先让公公和孩子吃饱，自己才吃。有时饭不够，乔贵巧就在饭里添几勺子冷水，热热凑合着。烧暖炕、擦身子、送夜壶72岁儿媳妇孝敬102岁公公成佳话困难岁月终有尽头。在乔贵巧努力下，儿女逐渐长大成人，先后成家。乔贵巧本该歇歇，但公公身体越来越差，生活逐渐不能自理。乔贵巧不愿给儿女增加负担，又无声地继续承担起赡养公公重担。乔贵巧公公逯明星今年102岁，十多年前开始生活不能自理，但是头脑还非常清楚。老人告诉记者，“儿媳妇待我很好！”夏天天热，公公站立不稳，也不敢让老人去澡堂洗澡。乔贵巧就时常在家烧好温水给老人擦拭身子，让老人身体清爽。冬天公公怕冷，买不起空调，用电热毯又担心公公大小便失禁，会中电。乔贵巧就让人给公公修个暖炕。每当天冷晚上乔贵巧就早早用柴火把公公炕烧热乎，不冷不热正暖和。公公年纪越来越大，夜里小便频繁，乔贵巧每天夜里起床给公公倒夜壶……2017年冬天，连续多日雨雪不断，冬天每日需要柴火为给公公烧炕的乔贵巧很是着急，又不容易遇到晴天，她急着把晒干的柴火抱到院子里后，由于心脏不太好，出现心慌，跌倒在地，嘴也磕破了，右胳膊摔得钻心的疼，倒在地上爬不起来，幸亏邻居前来串门发现情况，把她扶起来。她舍不得花钱，找村医揉揉用点药，想对付过去。谁知第二天右胳膊不能动，一动疼得刀割似的，在儿子的要求下，到医院检查发现是骨折了，做手术下了钢板，她为了省钱直到现在还没有让把钢板取出来。在采访中，乔贵巧的近邻逯继成闻讯赶来。他退休前是清丰某中学的一名老师。“很多人可能不知道，乔贵巧爱人逯法林可不是亲生的，是抱养的！”熟悉情况的逯继成告诉记者，“这个家要没有乔贵巧，早完了！她公公也不可能活到现在！方圆十里八里像乔贵巧孝顺老人的她绝对是第一名！”几十年如一日孝敬公公深受乡亲称赞孝道家风传承后人乔贵巧告诉记者：“儿子逯彦鹏和儿媳很孝顺，经常要给我买这买那。孩子们出去打工挣钱不容易，可是俺不想给孩子们添负担。儿媳很尊敬俺从来没有跟俺吵过架，对她爷爷也特别孝顺。这几年俺胳膊不灵便，儿媳马贵荣打工回来就常常替俺，给她爷爷洗脚剪脚指甲……”采访中逯彦鹏把冒着热气的一碗鸡蛋面叶，双手端给爷爷后，告诉记者：“母亲从小一个人把我们养育大，很不容易！从我记事起，母亲就一直孝敬爷爷。孝敬老人是我们的家风，母亲已经给我们树立榜样，我和媳妇会孝敬爷爷和母亲，会继续传承这种孝道家风。”店上村村主任杜彦彬告诉记者：“乔贵巧是我们村的孝道典型，村里已经上报乡里，她获得过乡里颁发‘好媳妇’荣誉证书，以后村里会根据国家政策给予照顾！”",
              "com": "东方今报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34309"
            },
            {
              "time": "2019-03-24",
              "title": "桂城“的哥”义载中风老伯",
              "id": "5c9852599484db57c329d1e2",
              "content": "珠江时报讯（特约通讯员/丁当通讯员/周晓东摄影报道）爱心“的哥”将瘫痪老伯抬上出租车并为其系好安全带，从桂城驱车到黄岐，将老伯平安送到家……近日，佛广集团爱心车队党员志愿者庞建波驾车来到南海医院住院部，为老伯一家提供免费接送服务，用实际行动践行雷锋精神，传播志愿服务理念。“大年初五那天，我丈夫因突发中风住院，为了治好他的病，我们从黄岐来到了桂城。”刘女士说，突如其来的意外给原本是低保户的一家带来沉重的经济负担。“因为有些事情要回家一趟，但路程遥远车费昂贵，我就问了义工，看能不能得到一些帮助，义工就给我联系了佛广集团爱心车队。”得知3月14日有户人家需要义载，佛广集团爱心车队党员志愿者庞建波便早早报名，主动为刘女士一家提供帮扶。当天，庞建波提前来到南海医院住院部，陪刘女士一家办好出院手续，主动推车、抬老伯上车、收好轮椅，为他系上安全带。“很感激你送我们回家！”到达目的地后，刘女士不停对庞建波道谢，表示义载对于处于困难中的两夫妻是雪中送炭。对于本次义载服务，庞建波表示这仅仅是“举手之劳”。许多患病或困难者也曾得到过庞建波和爱心车队的帮助，比如狮山的陈伯，陈伯罹患肾衰竭，每月好几天都要4时半起床，搭公交到广东省中西医结合医院就医。“2017年，陈伯的家人联系上我们车队并签订了义载服务协议。现在，我们仍每月为陈老伯提供免费接送服务，我们都是老熟人啦！”庞建波说。“我本人比较爱‘管闲事’，看到需要帮助的人总是忍不住去扶一把，所以我也常常去做义工，帮到别人之余，也提升了个人的素养和觉悟。”庞建波说，自己是佛广集团爱心车队的其中一名“元老”，对义载服务很支持，帮扶对象也达到数十人次。受到他的影响，身边的同事、亲人也参加到志愿服务中，他代表佛广集团爱心车队倡议：“希望有更多人能献出爱心、伸出援手，为更多需要帮助的人送去温暖。”庞建波只是爱心“的哥”的一个缩影。除了爱心义载，佛广集团爱心车队还积极开展“爱心送考”“爱心义剪”“爱心献血”等特色服务项目，受到社会各界的认可，荣获佛山市青年文明号、“关爱桂城”关爱提名奖，2016至2018年连续三年成功申报南海区志愿服务项目，并获得2017年佛山市“益苗计划”志愿服务项目大赛市级示范项目。",
              "com": "珠江时报",
              "href": "https://story.now.taobao.com/show_story.htm?id=34310"
            }];
        for(var i=0;i<bbsdata.length;i++){ 
            var bbsp = U.create('p');
            var ps=[];//bbsp数组
            bbsp.className="item";
            bbsp.innerHTML=`<a href="${bbsdata[i].href}">${bbsdata[i].title}</a><span>发帖时间：${bbsdata[i].time}</span>`;
            ps.push(bbsp);
            if(bbsdata.length<=10){
                U.append(bbscontent,bbsp);
            }else{
                var firstps=ps.slice(0,10);
                U.append(bbscontent,bbsp);
            }
        }
        

    }
)();


