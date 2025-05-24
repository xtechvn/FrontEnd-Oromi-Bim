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
}
