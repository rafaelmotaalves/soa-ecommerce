package br.ufpe.cin.ecommerce.fachada;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class ComunicacaoControleAcesso {

    private RestTemplate restTemplate;
    
    private static final String ROTA_VERIFICAR = "/verificar";


    Logger logger = LoggerFactory.getLogger(ComunicacaoControleAcesso.class);

    @Value("${acesso.url}")
    private String acessoUrl;

    ComunicacaoControleAcesso() {
        this.restTemplate = new RestTemplate();
    }

    public ClienteInternetDTO verificarCliente(String token) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("token", token);

        HttpEntity<HttpHeaders> entity = new HttpEntity<>(headers);

        String url = this.acessoUrl + ROTA_VERIFICAR;
        ResponseEntity<ClienteInternetDTO> response = this.restTemplate.exchange(
            url, HttpMethod.GET, entity, ClienteInternetDTO.class);

        return response.getBody();
    }
}
