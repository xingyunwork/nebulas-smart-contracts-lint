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
    import merge from 'merge';
    import config from '../config';
    import EslintEditor from "vue-eslint-editor"
    import noSetIntervalRule from '../eslint/rules/no-setinterval';

    export default {
        name: 'Editor',
        data(){
            return {
                linter: null,
                config: merge({
                    "env": {
                        "node": true
                    },
                    "rules":{
                        "no-alert": 2,
                        // "no-undef": 2,
                        // "no-console": 2,
                        "no-setinterval": 2,
                    }
                }),
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
            linter.defineRule("no-setinterval", noSetIntervalRule);

            self.linter = linter;



            fetch('contracts/setInterval.js')
                .then((res)=>{
                    return res.text() // res.text()是一个Promise对象
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
