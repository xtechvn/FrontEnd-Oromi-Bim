namespace BIOLIFE.Models
{
    public class HomepageBannerModel
    {
        public List<AllCode> main { get; set; }
        public List<AllCode> sub { get; set; }
        public List<AllCode> trending_main { get; set; }
    }

    public  class AllCode
    {
        public int Id { get; set; }

        public string Type { get; set; } = null!;

        public short CodeValue { get; set; }

        public string? Description { get; set; }

        public short? OrderNo { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? CreateDate { get; set; }

        public int? UpdatedBy { get; set; }

        public DateTime? UpdateTime { get; set; }

    }
}
