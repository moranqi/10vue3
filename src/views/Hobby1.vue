<template>
    <div class="login">
        <h2>问卷调查问卷调查表填写</h2>
        <div v-show="showErr1">
            <label>请问您的性别是:</label>
            <p>
                <input type="radio" class="" v-model="sex" value="男" name="sex"/>
                <label>男</label>
                <input type="radio" v-model="sex" value="女" name="sex"/>
                <label>女</label>
                <input type="radio" v-model="sex" value="保密" name="sex" />
                <label>保密</label>
            </p>
            <p>
                <button @click="next1()">下一步</button>
                <button @click="qc1()">重置</button>
            </p>
        </div>
        <div v-show="showErr2">
            <label>请选择你的兴趣爱好:</label>
            <p>
                <input type="checkbox" v-model="hobby" value="看书" name=""/>
                <label>看书</label>
                <input type="checkbox" v-model="hobby" value="游泳" name=""/>
                <label>游泳</label>
                <input type="checkbox" v-model="hobby" value="跑步" name="" />
                <label>跑步</label>
                <input type="checkbox" v-model="hobby" value="看电影" name="" />
                <label>看电影</label>
                <input type="checkbox" v-model="hobby" value="听音乐" name="" />
                <label>听音乐</label>
                <input type="checkbox" v-model="hobby" value="动漫" name="" />
                <label>动漫</label>
            </p>
            <p>
                <button @click="next2()">下一步</button>
                <button @click="next3()">上一步</button>
                <button @click="qc2()">重置</button>
            </p>
        </div>
        <div v-show="showErr3">
            <label>3.请介绍一下自己:</label>
            <p>
                <textarea v-model="zwjs" style="width:50%;height:100px;"></textarea>
            </p>
            <p>
                <button @click="next4()">提交</button>
                <button @click="next1()">上一页</button>
                <button @click="qc3()">重置</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hobby1",
        data() {
            return {
                sex: '',
                hobby:[],
                zwjs:'',
                showErr1:true,
                showErr2:false,
                showErr3:false,
            }
        },
        methods: {
            next1() {
                this.showErr1=false;
                this.showErr2=true;
                this.showErr3=false;
            },
            next2() {
                this.showErr1=false;
                this.showErr2=false;
                this.showErr3=true;
            },
            next3() {
                this.showErr1=true;
                this.showErr2=false;
                this.showErr3=false;
            },
            next4(){
                this.$store.commit("addhobby",{sex:this.sex,hobby:this.hobby,zwjs:this.zwjs})
                let found=this.$store.state.hobby.find(
                    (obj)=>{return((obj.sex==this.sex&&(obj.hobby==this.hobby)&&(obj.zwjs==this.zwjs)))}
                );
                if (found!=undefined)
                    this.$router.push(
                        {name:'success',params:{sex:found.sex,hobby:found.hobby,zwjs:found.zwjs}}
                    );
            },
            qc1(){
                this.sex=''
            },
            qc2(){
                this.hobby=[]
            },
            qc3(){
                this.zwjs=''
            }
        }
    }
</script>

<style scoped>
</style>