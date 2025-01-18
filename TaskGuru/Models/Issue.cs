namespace TaskGuru.Models
{
    public class Issue
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int ProjectId {  get; set; }
        public Project Project { get; set; }
        public int SprintId { get; set; }  
        public Sprint Sprint { get; set; } 

        public IssueStatus Status { get; set; } 
        public IssueType Type { get; set; }
    }
    public enum IssueStatus
    {
        New,
        InProgress,
        Completed
    }
    public enum IssueType
    {
        Task,
        UserStory,
        Bug
    }
}
