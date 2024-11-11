package saas.Nexus.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class SocialAccount {
    private String platform;
    private String accountId;
    private String accessToken;
    private String refreshToken;
    private Long tokenExpiry;

    // Getters and setters
}
