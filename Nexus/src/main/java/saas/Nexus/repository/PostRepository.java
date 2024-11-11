package saas.Nexus.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import saas.Nexus.model.Post;

import java.time.LocalDateTime;
import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findByUserIdAndScheduledTimeBetween(String userId, LocalDateTime start, LocalDateTime end);
}
