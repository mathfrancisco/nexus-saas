package saas.Nexus.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String email;
    private String password;
    private String companyName;
    private List<SocialAccount> socialAccounts;
    private SubscriptionPlan subscriptionPlan;

    // Getters and setters
}
