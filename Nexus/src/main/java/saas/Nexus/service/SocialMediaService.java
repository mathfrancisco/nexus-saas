package saas.Nexus.service;

import org.springframework.stereotype.Service;
import saas.Nexus.model.Post;
import saas.Nexus.repository.PostRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SocialMediaService {
    private final PostRepository postRepository;

    public SocialMediaService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post schedulePost(Post post) {
        // Add validation and business logic
        return postRepository.save(post);
    }

    public List<Post> getScheduledPosts(String userId, LocalDateTime start, LocalDateTime end) {
        return postRepository.findByUserIdAndScheduledTimeBetween(userId, start, end);
    }
}