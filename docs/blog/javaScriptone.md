# vue+element-ui

### 两个时间控件结束时间不能大于开始时间

HTML代码

```vue
<div style="padding-top: 10px;">
    日期： 
    <el-date-picker v-model="createDate" type="datetime"  value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" @change="startTimeStatus" :picker-options="pickerOptionsStart" style="margin-right: 10px;">
    </el-date-picker>
    至
    <el-date-picker v-model="overDate" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" @change="endTimeStatus" :picker-options="pickerOptionsEnd" style="margin-left: 10px;">
    </el-date-picker>

```

Javascript代码

```js
   <script type="text/babel">
    var app = new Vue({
        el: '#app',
        data:function() {
            return {
                createDate: '',
                overDate:'',
                pickerOptionsStart: {
                    disabledDate: time => {
                        let endDateVal = this.overDate;
                        if (endDateVal) {
                            return time.getTime() > new Date(endDateVal).getTime();
                        }
                    }
                },
                pickerOptionsEnd: {
                    disabledDate: time => {
                        let beginDateVal = this.createDate;
                        if (beginDateVal) {
                            return (
                                time.getTime() <
                                new Date(beginDateVal).getTime()
                            );
                        }
                    },
                },
            }
        },
        methods: {
            // 时间开始选择器
            startTimeStatus:function(value){
                this.createDate = value
            },
            // 时间结束选择器
            endTimeStatus:function(value){
                this.overDate = value
            },
        },
        created(){

        },
        mounted:function(){
           
        }
    })
</script>

```