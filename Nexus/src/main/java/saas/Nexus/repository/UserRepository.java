package saas.Nexus.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import saas.Nexus.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
