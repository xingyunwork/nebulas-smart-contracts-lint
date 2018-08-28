<template>
    <div class="contract-editor">
        <eslint-editor style="height: 100%;" language="javascript"
                       :linter="linter" filename="contract.js"
                       :config="config"
                       :code="code" dark
        />
    </div>
</template>

<script>
    import config from '../eslint-recommended';
    import EslintEditor from "vue-eslint-editor"
    // import noSetIntervalRule from '../eslint/rules/no-setinterval';

    export default {
        name: 'Editor',
        data(){
            return {
                linter: null,
                config: config,
                code: ''
            }
        },
        components:{
            EslintEditor
        },
        async mounted() {
            const self = this;

            const { default: Linter } = await import("eslint4b");
            const linter = new Linter();
            // const { indent, quotes, semi } = require("eslint4b/dist/core-rules");
            // debugger
            //
            // linter.defineRule("indent", indent)
            // linter.defineRule("quotes", quotes)
            // linter.defineRule("semi", semi)
            // linter.defineRule("no-setinterval", noSetIntervalRule);

            (function () {
                // linter.defineRule("no-async", require('../eslint/rules/no-async').default);
                // linter.defineRule("no-window", require('../eslint/rules/no-window').default);
                // linter.defineRule("available-libs", require('../eslint/rules/available-libs').default);
                // linter.defineRule("no-proxy", require('../eslint/rules/no-proxy').default);

                // var rule = require('eslint-plugin-nebulas-contract/rules/no-window');
                // console.log(rule);


                linter.defineRule("no-window", require('eslint-plugin-nebulas-contract/rules/no-window'));
                linter.defineRule("available-libs", require('eslint-plugin-nebulas-contract/rules/available-libs'));

                linter.defineRule("valid-contract", require('eslint-plugin-nebulas-contract/rules/valid-contract'));

                // linter.defineRule("contract-init", require('eslint-plugin-nebulas-contract/rules/contract-init'));
                linter.defineRule("module-exports", require('eslint-plugin-nebulas-contract/rules/module-exports'));
                linter.defineRule("no-dupe-keys-in-local-contract-storage", require('eslint-plugin-nebulas-contract/rules/no-dupe-keys-in-local-contract-storage'));
                linter.defineRule("no-es6", require('eslint-plugin-nebulas-contract/rules/no-es6'));
                linter.defineRule("no-settimeout", require('eslint-plugin-nebulas-contract/rules/no-settimeout'));
                linter.defineRule("no-window", require('eslint-plugin-nebulas-contract/rules/no-window'));
                linter.defineRule("valid-blockchain-api", require('eslint-plugin-nebulas-contract/rules/valid-blockchain-api'));
                linter.defineRule("valid-event-api", require('eslint-plugin-nebulas-contract/rules/valid-event-api'));
                linter.defineRule("valid-local-contract-storage-api", require('eslint-plugin-nebulas-contract/rules/valid-local-contract-storage-api'));


            })();

            self.linter = linter;



            fetch('contracts/contract.js')
                .then((res)=>{
                    return res.text()
                })
                .then((res)=>{
                    self.code = res;
                });






        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .contract-editor{
        width: 100%;
        height: 100%;
    }
</style>
