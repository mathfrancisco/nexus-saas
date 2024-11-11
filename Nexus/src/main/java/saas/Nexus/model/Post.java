package saas.Nexus.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String userId;
    private String content;
    private List<String> mediaUrls;
    private List<String> targetPlatforms;
    private LocalDateTime scheduledTime;
    private PostStatus status;
    private Analytics analytics;

    // Getters and setters
}
