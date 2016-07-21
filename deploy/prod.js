var environments = {
    'dev': {
        pdm: function(domain) {
            return 'http://localhost:8180/' + (domain ? domain : EasyAssess.session.domain) + '/data/'
        },

        assess: function(domain) {
            return 'http://localhost:9190/' + (domain ? domain : EasyAssess.session.domain) + '/assess/'
        }
    },
    'prod':{
        pdm: function(domain) {
            return 'http://localhost:8888/' + (domain ? domain : EasyAssess.session.domain) + '/data/'
        },

        assess: function(domain) {
            return 'http://localhost:9190/' + (domain ? domain : EasyAssess.session.domain) + '/assess/'
        }
    },
    'test':{
        pdm: function(domain) {
            return 'http://localhost:8180/' + (domain ? domain : EasyAssess.session.domain) + '/data/'
        },

        assess: function(domain) {
            return 'http://localhost:9190/' + (domain ? domain : EasyAssess.session.domain) + '/assess/'
        }
    }
};

window._activeEnv = environments.prod;