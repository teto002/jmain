// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simpleTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simpleTab").prepend('<ul class="tab-wrapper"></ul>');c.addClass("tab-content").each(function(){a(this).hide();e.find(".tab-wrapper").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".tab-wrapper a").on("click",function(){var f=a(this).parent().index();a(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);


// Main Scripts

    $(".index .post-outer,.archive .post-outer").each(function () {
        $(this).find(".block-image .thumb a").attr("style", function (a, b) {
            return b.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style", function (a, b) {
            return b.replace("s72-c", "s1600")
        })
    });
    $(".index .post-outer,.archive .post-outer").each(function () {
        $(this).find(".block-image .thumb a").attr("style", function (a, b) {
            return b.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png", "" + no_image + "")
        })
    });
    $('.PopularPosts ul li img').each(function () {
        $(this).attr('src', function (i, src) {
            return src.replace('/default.jpg', '/mqdefault.jpg')
        }).attr('src', function (i, src) {
            return src.replace('s72-c', 's1600')
        })
    });
    $(".PopularPosts .item-thumbnail a").prepend('<span class="img-overlay"/>');
    $(".sect-left .widget h2").wrap("<div class='title-wrap'/>");
    

    $(".social-counter").each(function () {
        var a = $(this);
        var b = $(this).find(".item-social");
        if (0 === b.length) a.remove();
        $(this).find(".widget").removeClass("LinkList");
        $(".social-counter .item-social.facebook").find(".item-text").text("Likes");
        $(".social-counter .item-social.rss,.social-counter .item-social.youtube").find(".item-text").text("Subscribes");
        var c = "count=";
        var d = ";";
        $(".social-counter *").replaceText(c, '<span class="item-count">');
        $(".social-counter *").replaceText(d, "</span>");
        $(".item-social").each(function () {
            var a = $(this).find(".hide-count");
            var b = $(this).find(".item-count");
            $(a).before($(b));
            $(a).remove()
        })
    });
$(document).ready(function () {
    var n = $("#sidetabs #tabside1 .widget h2").text();
    $(".menu-tab .item-1 a").text(n);
    var u = $("#sidetabs #tabside2 .widget h2").text();
    $(".menu-tab .item-2 a").text(u);
    $("#tabside1 .widget h2,#tabside2 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title").remove();
    $(this).find(".menu-tab li").addClass("hide-tab");
    $(".sidetabs").tabslet({
        mouseevent: "click",
        attribute: "href",
        animation: true
    });
    if (0 === $(".sidetabs .widget").length) $(".sidetabs").remove()
});
$(document).ready(function (a) {
    var b = a("a.newer-link");
    var c = a("a.older-link");
    a.get(b.attr("href"), function (c) {
        b.html("<strong>" + pagenav_next + "</strong><span>" + a(c).find(".post h1.post-title").text() + "</span>")
    }, "html");
    a.get(c.attr("href"), function (b) {
        c.html("<strong>" + pagenav_prev + "</strong><span>" + a(b).find(".post h1.post-title").text() + "</span>")
    }, "html")
});
$(document).ready(function () {
    var t = $(".item #post-ads-footer");
    $(".item .post *").replaceText('<div class="ad-post-footer"/>');
    $(".ad-post-footer").append(t);
    var n = $(".post-body #post-ads-footer").width();
    $(".post-body .ad-post-footer").width(n)
});
$(document).ready(function () {
    $('a').each(function () {
        var a = $(this).attr('href'),
            e = $(this);
        if (a !== undefined) {
            if (a.indexOf('/search/label') != -1) {
                if (a.indexOf('max-results') != -1) {
                    var t = getParameterByName('max-results', a),
                        n = a.replace('max-results=' + t, 'max-results=' + postperpage);
                    e.attr('href', n)
                } else {
                    if (a.indexOf('?') == -1) {
                        e.attr('href', a + "?&max-results=" + postperpage)
                    } else {
                        e.attr('href', a + "&max-results=" + postperpage)
                    }
                }
            }
        }
    })
});



$('.ready-widget .HTML .widget-content span.recentcomments').each(function () {
    var b = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/comments/default?alt=json-in-script&max-results=" + b,
        type: 'get',
        dataType: "jsonp",
        success: function (e) {
            var u = "";
            var h = '<ul class="cmm-widget">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                if (i == e.feed.entry.length) break;
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == 'alternate') {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                if ("content" in e.feed.entry[i]) {
                    var c = e.feed.entry[i].content.$t
                } else if ("summary" in b_rc) {
                    var c = e.feed.entry[i].summary.$t
                } else var c = "";
                var re = /<\S[^>]*>/g;
                c = c.replace(re, "");
                if (c.length > 70) {
                    c = '' + c.substring(0, 50) + '...'
                }
                var y = e.feed.entry[i].author[0].name.$t;
                var yk = e.feed.entry[i].author[0].gd$image.src;
                if (yk.match('http://img1.blogblog.com/img/blank.gif')) {
                    var k = 'http://img1.blogblog.com/img/anon36.png'
                } else {
                    if (yk.match('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var k = 'http://img1.blogblog.com/img/anon36.png'
                    } else {
                        var k = yk
                    }
                };
                h += '<li><div class="cmm-avatar"><img class="cmm-img" src="' + k + '"/></div><a href="' + u + '">' + y + '</a><span>"' + c + '"</span></li>'
            }
            h += '</ul><div class="clear"/>';
            $('.ready-widget .HTML .widget-content span.recentcomments').each(function () {
                var text = $(this).attr("data-no");
                if (text == b) {
                    $(this).parent().html(h)
                }
            })
        }
    })
});
$('.ready-widget .HTML .widget-content span.recentposts').each(function () {
    var b = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script&max-results=" + b,
        type: 'get',
        dataType: "jsonp",
        success: function (e) {
            var u = "";
            var h = '<ul class="custom-widget">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var s = e.feed.entry[i].category[0].term;
                var y = e.feed.entry[i].author[0].name.$t;
                var d = e.feed.entry[i].published.$t,
                    t = d.substring(0, 4),
                    w = d.substring(5, 7),
                    f = d.substring(8, 10),
                    r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("//www.youtube.com/embed/") > -1) {
                    var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var k = p
                } else if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                    var k = q
                } else {
                    var k = no_image
                }
                h += '<li><a class="rcthumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div></li>'
            }
            h += '</ul>';
            $('.ready-widget .HTML .widget-content span.recentposts').each(function () {
                var text = $(this).attr("data-no");
                if (text == b) {
                    $(this).parent().html(h)
                }
            })
        }
    })
});
$('.ready-widget .HTML .widget-content span.labelpost').each(function () {
    var v = $(this).attr("data-label"),
        b = $(this).attr("data-no");
    $.ajax({
        url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
        type: 'get',
        dataType: "jsonp",
        success: function (e) {
            var u = "";
            var h = '<ul class="custom-widget">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var s = e.feed.entry[i].category[0].term;
                var y = e.feed.entry[i].author[0].name.$t;
                var d = e.feed.entry[i].published.$t,
                    t = d.substring(0, 4),
                    w = d.substring(5, 7),
                    f = d.substring(8, 10),
                    r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("//www.youtube.com/embed/") > -1) {
                    var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var k = p
                } else if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                    var k = q
                } else {
                    var k = no_image
                }
                h += '<li><a class="rcthumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div></li>'
            }
            h += '</ul>';
            $(".ready-widget .HTML .widget-content span.labelpost").each(function () {
                var text = $(this).attr("data-label");
                if (text == v) {
                    $(this).parent().html(h)
                }
            })
        }
    })
});

$(".recent-boxes .HTML .widget-content").each(function () {
    var v = $(this).find("span").attr("data-label"),
        b = $(this).find("span").attr("data-no"),
        n = $(this).prev("h2").text(),
        sora = $(this).parent().attr("id"),
        box = $(this).find("span").attr("data-type");
    if (box.match('feat')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=5",
            type: 'get',
            dataType: "jsonp",
            success: function (e) {
                var u = "";
                var h = '<ul>';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var y = e.feed.entry[i].author[0].name.$t;
                    var d = e.feed.entry[i].published.$t,
                        t = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = no_image
                    }
                    if (i == 0) {
                        h += '<div class="bx-first"><div class="bx-item"><div class="box-thumbnail"><a class="bf-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + s + '" href="/search/label/' + s + '">' + s + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div></div></div>'
                    } else {
                        h += '<li><div class="box-thumbnail"><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div><div class="clear"/></li>'
                    }
                }
                h += '</ul>';
                $(".recent-boxes .HTML .widget-content").each(function () {
                    var text = $(this).parent().attr("id");
                    if (text == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('feat');
                        $(this).parent().addClass('boxes');
                        $(this).prev("h2").html('<a href="/search/label/' + v + '">' + n + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + v + '">' + more_text + '</a>');
                        $(this).find('.box-image,.bf-thumb').each(function () {
                            $(this).attr('style', function (i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function (i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
    if (box.match('columnleft')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
            type: 'get',
            dataType: "jsonp",
            success: function (e) {
                var u = "";
                var h = '<ul>';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var y = e.feed.entry[i].author[0].name.$t;
                    var d = e.feed.entry[i].published.$t,
                        t = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = no_image
                    }
                    if (i == 0) {
                        h += '<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + s + '" href="/search/label/' + s + '">' + s + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div></div>'
                    } else {
                        h += '<li><div class="box-thumbnail"><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div><div class="clear"/></li>'
                    }
                }
                h += '</ul>';
                $(".recent-boxes .HTML .widget-content").each(function () {
                    var text = $(this).parent().attr("id");
                    if (text == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('column');
                        $(this).parent().addClass('columnleft');
                        $(this).parent().addClass('boxes');
                        $(this).prev("h2").html('<a href="/search/label/' + v + '">' + n + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + v + '">' + more_text + '</a>');
                        $(this).find('.box-image,.bf-thumb').each(function () {
                            $(this).attr('style', function (i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function (i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
    if (box.match('columnright')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
            type: 'get',
            dataType: "jsonp",
            success: function (e) {
                var u = "";
                var h = '<ul>';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var y = e.feed.entry[i].author[0].name.$t;
                    var d = e.feed.entry[i].published.$t,
                        t = d.substring(0, 4),
                        w = d.substring(5, 7),
                        f = d.substring(8, 10),
                        r = month_format[parseInt(w, 10)] + ' ' + f + ', ' + t;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = no_image
                    }
                    if (i == 0) {
                        h += '<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="first-tag"><a class="icon ' + s + '" href="/search/label/' + s + '">' + s + '</a></div></div><div class="bf-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div></div>'
                    } else {
                        h += '<li><div class="box-thumbnail"><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span><span class="recent-date">' + r + '</span></div><div class="clear"/></li>'
                    }
                }
                h += '</ul>';
                $(".recent-boxes .HTML .widget-content").each(function () {
                    var text = $(this).parent().attr("id");
                    if (text == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('column');
                        $(this).parent().addClass('columnright');
                        $(this).parent().addClass('boxes');
                        $(this).prev("h2").html('<a href="/search/label/' + v + '">' + n + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + v + '">' + more_text + '</a>');
                        $(this).find('.box-image,.bf-thumb').each(function () {
                            $(this).attr('style', function (i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function (i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
    if (box.match('gallery')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=6",
            type: 'get',
            dataType: "jsonp",
            success: function (e) {
                var u = "";
                var h = '<ul>';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var y = e.feed.entry[i].author[0].name.$t;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = no_image
                    }
                    h += '<li><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="gallery-overlay"/></a><div class="category-gallery"><a class="icon ' + s + '" href="/search/label/' + s + '"></a></div><div class="recent-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span></div><div class="clear"/></li>'
                }
                h += '</ul>';
                $(".recent-boxes .HTML .widget-content").each(function () {
                    var text = $(this).parent().attr("id");
                    if (text == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('gallery');
                        $(this).prev("h2").html('<a href="/search/label/' + v + '">' + n + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + v + '">' + more_text + '</a>');
                        $(this).find('.box-image').each(function () {
                            $(this).attr('style', function (i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function (i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }
    if (box.match('videos')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=3",
            type: 'get',
            dataType: "jsonp",
            success: function (e) {
                var u = "";
                var h = '<ul>';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var y = e.feed.entry[i].author[0].name.$t;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url;
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src');
                        var k = q
                    } else {
                        var k = no_image
                    }
                    h += '<li><div class="videos-item"><a class="box-image" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="videos-overlay"/></a><div class="recent-content"><h3 class="recent-title"><a href="' + u + '">' + g + '</a></h3><span class="recent-author">' + y + '</span></div><div class="clear"/></div></li>'
                }
                h += '</ul>';
                $(".recent-boxes .HTML .widget-content").each(function () {
                    var text = $(this).parent().attr("id");
                    if (text == sora) {
                        $(this).html(h);
                        $(this).parent().addClass('videos');
                        $(this).prev("h2").html('<a href="/search/label/' + v + '">' + n + '</a>');
                        $(this).prev("h2").wrap('<div class="box-title"></div>');
                        $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + v + '">' + more_text + '</a>');
                        $(this).find('.box-image').each(function () {
                            $(this).attr('style', function (i, src) {
                                return src.replace('/default.jpg', '/mqdefault.jpg')
                            }).attr('style', function (i, src) {
                                return src.replace('s72-c', 's1600')
                            })
                        })
                    }
                })
            }
        })
    }

});

$("#related-posts").each(function () {
    var v = $(this).text();
    $.ajax({
        url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + related_number,
        type: 'get',
        dataType: "jsonp",
        success: function (e) {
            var u = "";
            var h = '<div class="related-wrap">';
            for (var i = 0; i < e.feed.entry.length; i++) {
                for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                    if (e.feed.entry[i].link[j].rel == "alternate") {
                        u = e.feed.entry[i].link[j].href;
                        break
                    }
                }
                var g = e.feed.entry[i].title.$t;
                var s = e.feed.entry[i].category[0].term;
                var y = e.feed.entry[i].author[0].name.$t;
                var c = e.feed.entry[i].content.$t;
                var $c = $('<div>').html(c);
                if (c.indexOf("//www.youtube.com/embed/") > -1) {
                    var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
                    var k = p
                } else if (c.indexOf("<img") > -1) {
                    var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
                    var k = q
                } else {
                    var k = no_image
                }
                h += '<li><div class="related-thumb"><a class="related-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="related-overlay"/></a></div><div class="related-content"><div class="related-tag"><a class="icon ' + s + '" href="/search/label/' + s + '">' + s + '</a></div><h3 class="related-title"><a href="' + u + '">' + g + '</a></h3></div></li>'
            }
            h += '</div><div class="clear"/>';
            $("#related-posts").html(h);
            $(this).find('.related-img').each(function () {
                $(this).attr('style', function (i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg')
                }).attr('style', function (i, src) {
                    return src.replace('s72-c', 's1600')
                })
            })
        }
    })
});
