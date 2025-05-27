$(document).ready(function () {
    const query_string = window.location.search;
    // Khởi tạo URLSearchParams để xử lý query string
    const url_params = new URLSearchParams(query_string);
    // Lấy giá trị của tham số 'page'
    const page = url_params.get('page') == null ? 1 : url_params.get('page');
    $(document.body).on('click', '.Category-tag .cat-tag', function (e) {
        var element = $(this)
        $('.Category-tag').removeClass('active')
        element.closest('.Category-tag').addClass('active')
        var id = element.attr('data-id')

        news_detail.bin_news_home(id, page);

    });
    $("#text_input").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            news_detail.GetFindArticleByTitle()
        }
    });
    $(document.body).on('click', '.form-search .btn-search', function (e) {
        news_detail.GetFindArticleByTitle()
    });
    news_detail.getNewsMostViewedArticle(1, page, category_id);
});
var news_detail = {
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
    // tin lien quan
    bin_news: function () {
        //const query_string = window.location.search;
        //// Khởi tạo URLSearchParams để xử lý query string
        //const url_params = new URLSearchParams(query_string);
        //// Lấy giá trị của tham số 'page'
        //const page = url_params.get('page') == null ? 1 : url_params.get('page');
        //var category_id = $('.active .cat-tag').attr('data-id');
        //$.ajax({
        //    dataType: 'html',
        //    type: 'POST',
        //    url: '/news/home/get-article-list.json',
        //    data: { category_id: category_id, page: page, view_name: "~/Views/Shared/Components/News/related.cshtml" },
        //    success: function (data) {
        //        $('.list-news-lq').html(data);
        //    },
        //    error: function (xhr, status, error) {
        //        console.log("Error: " + error); // Thay đổi từ 'failure' sang 'error'
        //    }
        //});
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

}