package br.ufpe.cin.ecommerce.fachada;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ComunicacaoControleAcesso {

    private RestTemplate restTemplate;

    @Value("${acesso.url}")
    private String acessoUrl;

    ComunicacaoControleAcesso() {
        this.restTemplate = new RestTemplate();
    }

    public ClienteInternetDTO verificarCliente(String token) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("token", token);

        HttpEntity<HttpHeaders> entity = new HttpEntity<>(headers);

        ResponseEntity<ClienteInternetDTO> response = this.restTemplate.exchange(
            acessoUrl, HttpMethod.GET, entity, ClienteInternetDTO.class);

        return response.getBody();
    }
}
