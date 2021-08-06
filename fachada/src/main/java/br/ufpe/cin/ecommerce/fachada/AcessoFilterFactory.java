package br.ufpe.cin.ecommerce.fachada;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.GatewayFilterFactory;
import org.springframework.stereotype.Component;

@Component
public class AcessoFilterFactory implements GatewayFilterFactory<AcessoFilterFactory.Config> {
    
    @Autowired
    AcessoFilter acessoFilter;


    @Override
    public GatewayFilter apply(Config config) {
        return acessoFilter;
    }

    @Override
    public Class<Config> getConfigClass() {
        return Config.class;
    }

    @Override
    public Config newConfig() {
        return new Config();
    }

    public static class Config {
    }

}
