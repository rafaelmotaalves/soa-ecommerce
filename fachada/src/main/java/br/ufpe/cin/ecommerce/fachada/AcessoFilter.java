package br.ufpe.cin.ecommerce.fachada;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import reactor.core.publisher.Mono;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
class AcessoFilter implements GatewayFilter {

    Logger logger = LoggerFactory.getLogger(AcessoFilter.class);

    @Autowired
    ComunicacaoControleAcesso comunicacaoControleAcesso;

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        
        HttpHeaders headers = request.getHeaders();

        if (!headers.containsKey("token")) {
            logger.info("Token não encontrado");
            return rejeitarRequisicao(exchange);
        }

        try {
            String token = headers.get("token").get(0);

            logger.info("Verificando token");
            ClienteInternetDTO clienteInternet = comunicacaoControleAcesso.verificarCliente(token);

            logger.info("Token verificado");
            request
                .mutate()
                .header("email-cliente", clienteInternet.email)
                .header("id-cliente", String.valueOf(clienteInternet.id))
                .build();

            return chain.filter(exchange);
        } catch (Exception e) {
            e.printStackTrace();
            logger.info(e.getMessage());
            return rejeitarRequisicao(exchange);
        }
    }

    public Mono<Void> rejeitarRequisicao(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }
    
}