$(document).ready(function () {

    $(document.body).on('click', '.form-search .btn-search', function (e) {
        news.GetFindArticleByTitle()
    });
    $(document.body).on('click', '.bt_xemthem_new', function (e) {
        var element = $(this)
        $('.page').removeClass('active')
        element.closest('.page').addClass('active')
        var action_page = parseInt($(this).attr("data-page")) + 1
        var id = $('.active .cat-tag').attr('data-id')
        news.bin_news_home(id, action_page);

    });
    $(document.body).on('click', '.action_page', function (e) {
        var element = $(this)
        $('.page').removeClass('active')
        element.closest('.page').addClass('active')
        var action_page = element.closest('.active').attr('data-page')
        var id = $('.active .cat-tag').attr('data-id')
        news.bin_news_home(id, action_page);
        
    });
    $(document.body).on('click', '.Category-tag .cat-tag', function (e) {
        var element = $(this)
        $('.Category-tag').removeClass('active')
        element.closest('.Category-tag').addClass('active')
        var id = element.attr('data-id')
        news.bin_news_home(id, page);
        
    });
    $("#text_input").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            news.GetFindArticleByTitle();
        }
    });
    var category_id = parseInt($(".category_id").data("categoryid"));

    const query_string = window.location.search;
    // Khởi tạo URLSearchParams để xử lý query string
    const url_params = new URLSearchParams(query_string);
    // Lấy giá trị của tham số 'page'
    const page = url_params.get('page') == null ? 1 : url_params.get('page');
    // Load tin trên trang chủ NEWS
    news.bin_news_home(category_id, page);
    news.getNewsMostViewedArticle(1, page, category_id);

    //if (category_id <= 0) {         
    //    // Bin theo tin mới nhất của các chuyên mục
    //    news.bin_news_top(category_id, "top_story", page);
    //    news.bin_news_left(category_id, "top_left", page);
    //} else {
    //    news.bin_news_top(category_id, "category_top", page);
    //    news.bin_news_left(category_id, "category_left", page);
    //}    
})

var news = {
    bin_news_home: function (category_id, page) {

        $.ajax({
            dataType: 'html',
            type: 'POST',
            url: '/news/home/get-article-list.json',
            data: { category_id: category_id, page: page, view_name: "~/Views/Shared/Components/News/Home.cshtml" },
            success: function (data) {
                $('.list-news-home').html(data);
            },
            error: function (xhr, status, error) {
                console.log("Error: " + error); // Thay đổi từ 'failure' sang 'error'
            }
        });

    },
    GetFindArticleByTitle: function () {
        var requestObj = {
            title: $('#text_input').val(),
            parent_cate_faq_id: $('.active .cat-tag').attr('data-id')
        };
        $.ajax({
            url: "/News/GetFindArticleByTitle",
            type: 'post',
            data: { requestObj: requestObj },
            success: function (data) {
                $('.list-news-home').html(data);
            },

        });
      

    },
    onpage: function (page) {
        var id = $('.active .cat-tag').attr('data-id')
        news.bin_news_home(id, page);

    },
    getNewsMostViewedArticle: function (page, size, category_id) {
        var requestObj = {
            skip: page,
            take: size,
            category_id: category_id
        };
        $.ajax({
            url: "/News/NewsMostViewedArticle",
            type: 'post',
            data: { requestObj: requestObj },
            success: function (data) {
                $("#Most_Viewed_Article").html(data);
            },
        });
    },


    //bin_news_top: function (category_id, position_name, page) {

    //    $.ajax({
    //        dataType: 'html',
    //        type: 'POST',
    //        url: 'article/get-list.json',
    //        data: { category_id: category_id, position_name: position_name, page: page },
    //        success: function (data) {
    //            $('.list-news-top').html(data);
    //        },
    //        error: function (xhr, status, error) {
    //            console.log("Error: " + error); // Thay đổi từ 'failure' sang 'error'
    //        }
    //    });

    //},   
    //bin_news_left: function (category_id, position_name, page) {

    //    $.ajax({
    //        dataType: 'html',
    //        type: 'POST',
    //        url: 'article/get-list.json',
    //        data: { category_id: category_id, position_name: position_name, page: page },
    //        success: function (data) {

    //            $('.list-news-top-left').html(data);
    //        },
    //        error: function (xhr, status, error) {
    //            console.log("Error: " + error); // Thay đổi từ 'failure' sang 'error'
    //        }
    //    });

    //}
}