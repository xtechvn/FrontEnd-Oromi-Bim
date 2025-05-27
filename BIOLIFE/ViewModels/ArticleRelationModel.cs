namespace BIOLIFE.ViewModels
{
    public class ArticleRelationModel
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public DateTime publish_date { get; set; }
        public string category_name { get; set; }
        public string Lead { get; set; }
    }
    public class ArticleResponse
    {
        public int id { get; set; }
        public string category_name { get; set; }
        public string title { get; set; }
        public string lead { get; set; }
        public string image_169 { get; set; }
        public string image_43 { get; set; }
        public string image_11 { get; set; }
        public string body { get; set; }
        public string image { get; set; }
        public DateTime publish_date { get; set; }
        public int? position { get; set; }
        public int? total_item { get; set; }
        public int? total_page { get; set; }

    }
}
