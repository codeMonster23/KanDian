 
// 中央组件的html代码


 //一般直接写在一个js文件中
 layui.use(['layer', 'form','laytpl'], function(){
    var layer = layui.layer
    ,form = layui.form;
    var laytpl = layui.laytpl;
    //底部添加组件的那个div，经常要用，弄成变量
    var $panel = $("#addPanel");

    //这是首页下面面板的“图文推荐”“音频推荐”“视频推荐”那个面板的各个ID的名称
    var mainAddArr = ['main-add-tuwen','main-add-yinpin','main-add-shipin',"main-add-tuji","main-add-zuhe","main-add-weikan","main-add-qikan","main-add-tushu","main-add-lunbo","main-add-wenzi"];
    //这是点了面板上各个按钮后，后弹出的面板的id名称。
    var mainAddTempArr = ['tempTuWen','tempYinPin','tempShiPin','tempTuJi','tempZuHe','tempWeiKan','tempQiKan','tempTuShu','tempLunBo','tempWenZi'];
    
    //点击下方面板，循环绑定事件，让点击每个按钮，能动态生成面板。
    $.each(mainAddArr,function(i, val){
        $('#'+val).on('click',function(){
            $('.empty').css('display','none');
            var data = {}
            var getTpl = $('#'+mainAddTempArr[i]).html();
            laytpl(getTpl).render(data,function(html){
                $panel.before(html);
            })
        })
    })

    
    //点击组件上方下方的加号，会生成面板，这个面板里的各个按钮，都有个class，写进数组中
    var panelAddBtns = ['tuwen','yinpin','shipin','tuji','zuhe','weikan','qikan','tushu','lunbo','wenzi']

    //点击组件上方下方的加号，会生成面板，点击每个向上向下按钮，会动态生成对应组件
    $.each(panelAddBtns, function(i,val){

        //向上按钮生成组件
        $("#showArea").on('click','.module-up .panel-add-'+val,function(){
            var data = {}
            var getTpl = $('#'+mainAddTempArr[i]).html();
            var $mydom = $(this);
            laytpl(getTpl).render(data,function(html){
                $mydom.parent().parent().parent().parent().before(html);
            })
            return false;
        })

        //向下按钮生成组件
        $("#showArea").on('click','.module-down .panel-add-'+val,function(){
            var data = {}
            var getTpl = $('#'+mainAddTempArr[i]).html();
            var $mydom = $(this);
            laytpl(getTpl).render(data,function(html){
                $mydom.parent().parent().parent().parent().after(html);
            })
            return false;
        })
    })

    //--------------------//
    //点击动态添加的图文按钮后，右侧展示图文添加的侧边栏菜单

    //点击图文作品后，右侧弹出图文作品弹窗
    $("#showArea").on('click','.tempTuWen',function(){
        var data = {
            "title":"图文作品",
            "link":"图文作品",
            "type":"tuwen",
            "add":"添加文章",
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
          type: 1,
          title: false,
          maxmin: false,
          shadeClose: false, //点击遮罩关闭层
          closeBtn: 0,
          skin:"zujian-alert",
          area : ['460px' , '100%'],
          offset: "rt",
          content: myHtml.data,
          shade: 0,
          anim: -1,
          isOutAnim: false 
        });
    });

    //点击音频作品后，右侧弹出音频作品弹窗
    $("#showArea").on('click','.tempYinPin',function(){
        var data = {
            "title":"音频作品",
            "link":"音频作品",
            "add":"添加音频",
            "type":"yinpin"
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
          type: 1,
          title: false,
          maxmin: false,
          shadeClose: false, //点击遮罩关闭层
          closeBtn: 0,
          skin:"zujian-alert",
          area : ['460px' , '100%'],
          offset: "rt",
          content: myHtml.data,
          shade: 0,
          anim: -1,
          isOutAnim: false 
        });
    });

    //点击音频视频后，右侧弹出添加视频弹窗
    $("#showArea").on('click','.tempShiPin',function(){
        var data = {
            "title":"视频作品",
            "link":"视频作品",
            "add":"添加视频",
            "type":"shipin"
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
          type: 1,
          title: false,
          maxmin: false,
          shadeClose: false, //点击遮罩关闭层
          closeBtn: 0,
          skin:"zujian-alert",
          area : ['460px' , '100%'],
          offset: "rt",
          content: myHtml.data,
          shade: 0,
          anim: -1,
          isOutAnim: false 
        });
    });

    //点击图集后，右侧弹出添加图集弹窗
    $("#showArea").on('click','.tempTuJi',function(){
        var data = {
            "title":"图集推荐",
            "link":"图集作品",
            "add":"添加图集",
            "type":"tuji"
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
          type: 1,
          title: false,
          maxmin: false,
          shadeClose: false, //点击遮罩关闭层
          closeBtn: 0,
          skin:"zujian-alert",
          area : ['460px' , '100%'],
          offset: "rt",
          content: myHtml.data,
          shade: 0,
          anim: -1,
          isOutAnim: false 
        });
    });

    //点击组合后，右侧弹出添加组合弹窗
    $("#showArea").on('click','.tempZuHe',function(){
        var data = {
            "title":"组合推荐",
            "link":"图集作品",
            "add":"添加作品",
            "type":"zuhe"
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
          type: 1,
          title: false,
          maxmin: false,
          shadeClose: false, //点击遮罩关闭层
          closeBtn: 0,
          skin:"zujian-alert",
          area : ['460px' , '100%'],
          offset: "rt",
          content: myHtml.data,
          shade: 0,
          anim: -1,
          isOutAnim: false 
        });
    });

    //点击微刊后，右侧弹出添加微刊弹窗
    $("#showArea").on('click','.tempWeiKan',function(){
        var data = {
            "title":"微刊推荐",
            "link":"微刊",
            "add":"添加微刊",
            "type":"weikan"
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            closeBtn: 0,
            skin:"zujian-alert",
            area : ['460px' , '100%'],
            offset: "rt",
            content: myHtml.data,
            shade: 0,
            anim: -1,
            isOutAnim: false 
        });
    });

    //点击期刊后，右侧弹出添加微刊弹窗
    $("#showArea").on('click','.tempQiKan',function(){
        var data = {
            "title":"期刊推荐",
            "link":"期刊",
            "add":"添加期刊",
            "type":"qikan"
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            closeBtn: 0,
            skin:"zujian-alert",
            area : ['460px' , '100%'],
            offset: "rt",
            content: myHtml.data,
            shade: 0,
            anim: -1,
            isOutAnim: false 
        });
    });

    //点击图书后，右侧弹出添加图书弹窗
    $("#showArea").on('click','.tempTuShu',function(){
        var data = {
            "title":"图书推荐",
            "link":"图书",
            "add":"添加图书",
            "type":"tushu"
        }
        var myHtml = {data:''};
        var getTpl = barTuWen.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            closeBtn: 0,
            skin:"zujian-alert",
            area : ['460px' , '100%'],
            offset: "rt",
            content: myHtml.data,
            shade: 0,
            anim: -1,
            isOutAnim: false 
        });
    });

    //点击轮播后，右侧弹出添加轮播弹窗
    $("#showArea").on('click','.tempLunBo',function(){
        var data = {type:'lunbo'}
        var myHtml = {data:''};
        var getTpl = barLunBo.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            closeBtn: 0,
            skin:"zujian-alert",
            area : ['460px' , '100%'],
            offset: "rt",
            content: myHtml.data,
            shade: 0,
            anim: -1,
            isOutAnim: false 
        });
    });

    //点击文字组件后，右侧弹出添加文字弹窗
    $("#showArea").on('click','.tempWenZi',function(){
        var data = {type:'wenzi'}
        var myHtml = {data:''};
        var getTpl = barWenZi.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            closeBtn: 0,
            skin:"zujian-alert",
            area : ['471px' , '100%'],
            offset: "rt",
            content: myHtml.data,
            shade: 0,
            anim: -1,
            isOutAnim: false 
        });
    });

    //点击顶部那一块，右侧弹出修改信息的按钮
    $(".tempInfo").on('click',function(){
        var data = {}
        var myHtml = {data:''};
        var getTpl = barInfo.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.closeAll();
        layer.open({
            type: 1,
            title: false,
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            closeBtn: 0,
            skin:"zujian-alert",
            area : ['460px' , '100%'],
            offset: "rt",
            content: myHtml.data,
            shade: 0,
        });
    });

    //点击上方提示的关闭按钮，关闭提示
    $("#tipsclose").on('click',function(){
        $(this).parent().remove();
    })
    //点击每一个组件，上面增加click的class，就会出现绿色的边框
    $("#showArea").on('click','.unit',function(){
        $(".unit").removeClass('myclick');
        $(this).addClass('myclick');
    })

    //点击组件后，会出现删除按钮，点击删除按钮，删掉这个组件,然后关掉右侧的弹窗。
    $("#showArea").on('click','.handle .del',function(){
        var myclick = $(this);
        var data = {}
        var myHtml = {data:''};
        var getTpl = tempAlert.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            closeBtn: 0,
            area : ['300px' , '140px'],
            content: './确认删除模块.html',
            shade: 0,
            end:function(){
                if($('.slogan').attr('alt')=='alertconfirm'){
                    myclick.parent().parent().remove();
                    layer.closeAll();
                    return false;
                }
            }
        });
        return false;
    })

    //点击组件后，会出现向上移动按钮，点击这个按钮，这个组件向上移动
    $("#showArea").on('click','.handle .up',function(){
        var zujian = $(this).parent().parent();
        zujian.insertBefore(zujian.prev('.unit'));
        return false;
    })

    //点击组件后，会出现向上移动按钮，点击这个按钮，这个组件向上移动
    $("#showArea").on('click','.handle .down',function(){
        var zujian = $(this).parent().parent();
        zujian.insertAfter(zujian.next('.unit'));
        return false;
    })

    //点击组件后，上方会出现十字加号，点击这个加号，出现一个添加组件的面板
    $("#showArea").on('click','.add1',function(){
        $(this).parent().find(".module-up").remove();
        $(this).parent().find(".module-down").remove();
        var data = {}
        var myHtml = {data:''};
        var getTpl = addPanelTop.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        $(this).parent().append(myHtml.data);
        return false;
    })
    //点击组件后，下方会出现十字加号，点击这个加号，出现一个添加组件的面板
    $("#showArea").on('click','.add2',function(){
        $(this).parent().find(".module-up").remove();
        $(this).parent().find(".module-down").remove();
        var data = {}
        var myHtml = {data:''};
        var getTpl = addPanelBottom.innerHTML
        laytpl(getTpl).render(data,function(html){
            myHtml.data = html;
        })
        $(this).parent().append(myHtml.data);
        return false;
    })

    //点击组件后，会出现加号，点击加号，会出现面板。点击面板右上角的删除，会删除这个面板
    $("#showArea").on('click','.module-close',function(){
        $(this).parent().parent().remove();
        return false;
    })

    //点击组件后，右侧会出现菜单，点击菜单的表单。会实现表单下拉和选择。
    $("body").on('click','.mset-double-select p', function(){
        $(this).next('ul').toggle();
    })
    $("body").on('click','.mset-double-select li', function(){
        $(this).parent().prev().html('更换链接');
        $(this).parent().parent().prev().css("display","block");
        $(this).parent().css("display","none");
    })

    //点击面板后，弹窗选择作品类型。iframe弹窗
    $("body").on('click','.zuopinleixing-select',function(){
        var myclick = $(this);
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            area: ['560px', '330px'],
            shadeClose: true, //点击遮罩关闭层
            closeBtn: 0,
            content: './弹窗选择作品类型.html',
            shade: 0,
            end:function(){
                if($('.slogan').attr('alt')=='zuopinleixingyes'){
                    myclick.parent().parent().prev().text("作品类型");
                }
            }
        });
    });

    //点击面板后，作品页面。iframe弹窗
    $("body").on('click','.zuopin-select',function(){
        $(this).parent().parent().prev().text("作品频道 | 作品页面");
    });
    //点击面板后，微刊页面。iframe弹窗
    $("body").on('click','.weikan-select',function(){
        $(this).parent().parent().prev().text("微刊频道 | 微刊页面");
    });

    //点击面板后，书店页面。iframe弹窗
    $("body").on('click','.shudian-select',function(){
        $(this).parent().parent().prev().text("书店频道 | 书店页面");
    });


    //点击面板后，弹窗选择图文类型。iframe弹窗
    $("body").on('click','.zuopinpage-select',function(){
        var myclick = $(this);
        var mytype = $(this).parent().parent().parent().parent().parent().parent().attr('data-type');
        if(mytype =='lunbo' || mytype =='wenzi' ){
            layer.open({
                type: 2,
                title: false,
                maxmin: false,
                shadeClose: true, //点击遮罩关闭层
                closeBtn: 0,
                area: ['560px', '747px'],
                content: './弹窗选择图文作品.html',
                shade: 0,
                end:function(){
                    if($('.slogan').attr('alt')=='zuopinyes'){
                        myclick.parent().parent().prev().text("作品页");
                    }
                }
            });
        }else{
            layer.open({
                type: 2,
                title: false,
                maxmin: false,
                shadeClose: true, //点击遮罩关闭层
                closeBtn: 0,
                area: ['560px', '747px'],
                content: './弹窗选择标签-图文作品.html',
                shade: 0,
                end:function(){
                    if($('.slogan').attr('alt')=='zuopinyes'){
                        myclick.parent().parent().prev().text("作品页");
                    }
                }
            });
        }
    });

    //点击面板后，弹窗选择作品分组。iframe弹窗
    $("body").on('click','.zuopingroup-select',function(){
        var myclick = $(this);
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            closeBtn: 0,
            area: ['560px', '582px'],
            content: './弹窗选择作品分组.html',
            shade: 0,
            end:function(){
                if($('.slogan').attr('alt')=='zuopingroupyes'){
                    myclick.parent().parent().prev().text("作品分组");
                }
            }
        });
    });

    //点击面板后，弹窗选择作品分组。iframe弹窗
    $("body").on('click','.weikanpage-select',function(){
        var myclick = $(this);
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            closeBtn: 0,
            area: ['560px', '692px'],
            content: './弹窗选择微刊.html',
            shade: 0,
            end:function(){
                if($('.slogan').attr('alt')=='weikanyes'){
                    myclick.parent().parent().prev().text("微刊页面");
                }
            }
        });
    });

    //点击面板后，弹窗选择期刊页。iframe弹窗
    $("body").on('click','.qikanpage-select',function(){
        var myclick = $(this);
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            closeBtn: 0,
            area: ['560px', '548px'],
            content: './弹窗选择期刊.html',
            shade: 0,
            end:function(){
                if($('.slogan').attr('alt')=='qikanyes'){
                    myclick.parent().parent().prev().text("期刊页面");
                }
            }
        });
    });

    //点击面板后，弹窗选择图书页。iframe弹窗
    $("body").on('click','.tushupage-select',function(){
        var myclick = $(this);
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '538px'],
            content: './弹窗选择图书.html',
            shade: 0,
            closeBtn: 0,
            end:function(){
                if($('.slogan').attr('alt')=='tushuyes'){
                    myclick.parent().parent().prev().text("图书页面");
                }
            }
        });
        
    });

    //点击轮播图组件，弹出轮播图面板，点击添加轮播图。判断是否超过5个。如果没有超过，就增加一个上传图片的面板。
    var lunboBlock = '<div class="setPic"> <a href="javascript:;" class="add add1"></a> <a href="javascript:;" class="add add2"></a> <a href="javascript:;" class="close"></a> <div class="pica left"> <a href="javascript:;" class="btn">+&nbsp;上传图片</a> <p>建议尺寸：100*200像素</p> </div> <div class="link left"> <p class="label">图片跳转链接</p> <div class="info clearfix"> <div class="name left">图文作品 | 茶道</div><div class="mset-double-select select left"> <p class="">选择跳转链接</p> <ul> <li class="border zuopin-select">作品频道</li> <li class="weikan-select" >微刊频道</li> <li class="shudian-select">书店频道</li> <li class="border zuopinpage-select" >作品页</li> <li class="zuopingroup-select">作品分组</li> <li class="zuopinleixing-select">作品类型</li> <li class="weikanpage-select border">微刊页</li> <li class="qikanpage-select">期刊页</li> <li  class="tushupage-select">图书页</li> </ul> </div> </div> </div> </div>';
    $("body").on('click','.lunbodetail #addpic',function(){
        if($(this).parent().children(".setPic").length ==5){
            layer.alert("最多添加5个");
        }
        if($(this).parent().children(".setPic").length <5){
            $(this).before(lunboBlock);
        }
        
        
    })
    $("body").on('click','.setPic .close',function(){
        $(this).parent().remove();
    })

    $("body").on('click','.lunbodetail .setPic .add1',function(){
        if($(this).parent().parent().children(".setPic").length ==5){
            layer.alert("最多添加5个");
        }
        if($(this).parent().parent().children(".setPic").length <5){
            $(this).parent().before(lunboBlock);
        }
    })
    $("body").on('click','.lunbodetail .setPic .add2',function(){
        if($(this).parent().parent().children(".setPic").length ==5){
            layer.alert("最多添加5个");
        }
        if($(this).parent().parent().children(".setPic").length <5){
            $(this).parent().after(lunboBlock);
        }
        
    })

    $("body").on('click','.pica',function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '563px'],
            content: './弹窗轮播图图片剪裁.html',
            shade: 0,
            closeBtn: 2,
        });
    })


    //点击文字组件，弹出文字面板，点击添加文字。判断是否超过5个。如果没有超过，就增加一个上传图片的面板。
    var wenziBlock = '<div class="setPic" style="padding:10px;"><a href="javascript:;" class="add add1"></a><a href="javascript:;" class="add add2"></a><a href="javascript:;" class="close"></a><div class="link left"><div class="label"><span>标题</span><input class="p-5 ml-4" type="text" style="width:340px;border:1px solid #ddd;"></div><div class="info clearfix mt-12"><span class="left">链接</span><div class="name left ml-9">图文作品 | 茶道</div><div class="select mset-double-select left ml-8"><p>选择跳转链接</p><ul><li class="border zuopin-select">作品频道</li><li class="weikan-select" >微刊频道</li><li class="shudian-select">书店频道</li><li class="border zuopinpage-select" >作品页</li><li class="zuopingroup-select">作品分组</li><li class="zuopinleixing-select">作品类型</li><li class="weikanpage-select border">微刊页</li><li class="qikanpage-select">期刊页</li><li  class="tushupage-select">图书页</li></ul></div></div></div></div>';
    $("body").on('click','.wenzidetail #addwenzi',function(){
        if($(this).parent().children(".setPic").length ==5){
            layer.alert("最多添加5个");
        }
        if($(this).parent().children(".setPic").length <5){
            $(this).before(wenziBlock);
        }
        
        
    })
    $("body").on('click','.setPic .close',function(){
        $(this).parent().remove();
    })

    $("body").on('click','.wenzidetail .setPic .add1',function(){
        if($(this).parent().parent().children(".setPic").length ==5){
            layer.alert("最多添加5个");
        }
        if($(this).parent().parent().children(".setPic").length <5){
            $(this).parent().before(wenziBlock);
        }
    })
    $("body").on('click','.wenzidetail .setPic .add2',function(){
        if($(this).parent().parent().children(".setPic").length ==5){
            layer.alert("最多添加5个");
        }
        if($(this).parent().parent().children(".setPic").length <5){
            $(this).parent().after(wenziBlock);
        }
        
    })

    $("body").on('click','.changewenzipic',function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '563px'],
            content: './弹窗轮播图图片剪裁.html',
            shade: 0,
            closeBtn: 2,
        });
    })

    //基本信息设置
    $("body").on('click','#basic-tabs a',function(){
        $(this).addClass('cur');
        $(this).siblings().removeClass('cur');
    })
    $("body").on('click','#basic-tabs-left',function(){
        $('#basic-item-left').css('display','block');
        $('#basic-item-right').css('display','none');
    })
    $("body").on('click','#basic-tabs-right',function(){
        $('#basic-item-left').css('display','none');
        $('#basic-item-right').css('display','block');
    })

    $("body").on('click','#basic-item-left li',function(){
        $(this).addClass('click');
        $(this).siblings().removeClass('click');
    })
    //基本信息 标题设置
    $("body").on('keyup','#basic-info-input-title',function(){
        $("#basic-info-title").text($(this).val());
    })
    $("body").on('keyup','#basic-info-input-des',function(){
        $("#basic-info-des").text($(this).val());

        var curLength = $(this).val().length;
        if(curLength>50){
            var num =  $(this).val().substr(0,50)
            $(this).val(num);
        }else{
            $("#basic-info-input-count").text(50-$(this).val().length+"/50");
        }
    })

    //图文推荐侧面面板
    $("body").on('click','.mset-selected-close',function(){
        $(this).parent().remove();
    })

    //侧面面板大图小图切换
    $("body").on('click','#select-xiaotu input',function(){
        var selectDom = $('.myclick');

        var data = {}
        var getTpl = barXiaoTu.innerHTML;
        laytpl(getTpl).render(data,function(html){
            selectDom.before(html);
        })
        selectDom.remove();
    })
    $("body").on('click','#select-liebiao input',function(){
        var selectDom = $('.myclick');

        var data = {}
        var getTpl = barLieBiao.innerHTML;
        laytpl(getTpl).render(data,function(html){
            selectDom.before(html);
        })
        selectDom.remove();
    })
    $("body").on('click','#select-datu input',function(){
        alert('大图的内容还原过来');
    })

    //点了每个面板 侧边栏展开，上面有按钮。分别是添加图书，添加图集等。要给这些按钮添加事件。
    $("body").on('click',"#add-panel-tuwen",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '717px'],
            content: './弹窗选择图文作品-多选.html',
            shade: 0,
            closeBtn: 0,
        });
    })
    $("body").on('click',"#add-panel-yinpin",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '727px'],
            content: './弹窗选择音频作品-多选.html',
            shade: 0,
            closeBtn: 0,
        });
    })
    $("body").on('click',"#add-panel-shipin",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '727px'],
            content: './弹窗选择视频作品-多选.html',
            shade: 0,
            closeBtn: 0,
        });
    })
    $("body").on('click',"#add-panel-tuji",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层 实际上弹窗和音频视频一样
            area: ['560px', '727px'],
            content: './弹窗选择视频作品-多选.html',
            shade: 0,
            closeBtn: 0,
        });
    })
    $("body").on('click',"#add-panel-zuhe",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '747px'],
            content: './弹窗选择标签-图文作品.html',
            shade: 0,
            closeBtn: 0,
        });
    })
    $("body").on('click',"#add-panel-weikan",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '692px'],
            content: './弹窗选择微刊.html',
            shade: 0,
            closeBtn: 0,
        });
    })
    $("body").on('click',"#add-panel-qikan",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '548px'],
            content: './弹窗选择期刊.html',
            shade: 0,
            closeBtn: 0,
        });
    })
    $("body").on('click',"#add-panel-tushu",function(){
        layer.open({
            type: 2,
            title: false,
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area: ['560px', '538px'],
            content: './弹窗选择图书.html',
            shade: 0,
            closeBtn: 0,
        });
    })
});
