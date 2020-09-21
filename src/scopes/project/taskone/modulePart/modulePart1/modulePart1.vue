<template>
    <div style="height:700px">
        <ta-border-layout layout-type="fixTop">
            <ta-card slot="header" :head-style="headStyle">
                <template slot="title">
                    <div><span class="smallIcon"/><span style="font-weight:800">查询条件</span></div>
                </template>
                <ta-form
                        id="queryForm"
                        layout="horizontal"
                        :form-layout="true"
                        :col="{xs:1,sm:2,md:2,lg:3}"
                        :auto-form-create="(form)=>{this.queryForm=form}">
                    <ta-form-item label="人员编号" :colon="false" fieldDecoratorId="psnNo">
                        <ta-auto-complete
                                :dataSource="dataSource"
                                :search-delay="1000"
                                @select="onSelect"
                                @search="handleSearch">
                            <ta-input
                                    placeholder="请输入编号"
                                    oninput="value=value.replace(/[^0-9a-zA-Z]/g,'')"
                                    autocomplete="off"
                                    @change="queryFormFieldsChange($event,'psnNo')"
                                    @focus="handleFocus">
                                <ta-icon v-show="queryFormEmptyFlag.psnNo" slot="suffix"
                                         type="close-circle" @click="queryFormFieldsEmpty('psnNo')"/>
                            </ta-input>
                        </ta-auto-complete>
                    </ta-form-item>
                    <ta-form-item label="姓名" :colon="false" fieldDecoratorId="psnName">
                        <ta-input placeholder="请输入姓名" autocomplete="off"
                                  @change="queryFormFieldsChange($event,'psnName')"
                                  @keyup.enter="query">
                            <ta-icon v-show="queryFormEmptyFlag.psnName" slot="suffix"
                                     type="close-circle" @click="queryFormFieldsEmpty('psnName')"/>
                        </ta-input>
                    </ta-form-item>
                    <ta-form-item label="手机号码" :colon="false" field-decorator-id="mob">
                        <ta-input
                                placeholder="请输入手机号码"
                                oninput="value=value.replace(/[^\d]/g,'')"
                                @keyup.enter="query"
                                @change="queryFormFieldsChange($event,'mob')"
                                autocomplete="off"
                                maxlength="11">
                            <ta-icon v-show="queryFormEmptyFlag.mob" slot="suffix"
                                     type="close-circle" @click="queryFormFieldsEmpty('mob')"/>
                        </ta-input>
                    </ta-form-item>
                    <ta-form-item label="邮箱地址" :colon="false" field-decorator-id="email">
                        <ta-input placeholder="请输入邮箱地址" autocomplete="off"
                                  @change="queryFormFieldsChange($event,'email')"
                                  @keyup.enter="query">
                            <ta-icon v-show="queryFormEmptyFlag.email" slot="suffix"
                                     type="close-circle" @click="queryFormFieldsEmpty('email')"/>
                        </ta-input>
                    </ta-form-item>
                    <ta-form-item label="证件类型" :colon="false" field-decorator-id="psnCertType">
                        <ta-select collection-type="psn_cert_type" placeholder="请选择证件类型" allowClear showSearch
                                   optionLabelProp="value"/>
                    </ta-form-item>
                    <ta-form-item label="证件号码" :colon="false" field-decorator-id="certno">
                        <ta-input placeholder="请输入证件号码" @keyup.enter="query" autocomplete="off"
                                  @change="queryFormFieldsChange($event,'certno')">
                            <ta-icon v-show="queryFormEmptyFlag.certno" slot="suffix"
                                     type="close-circle" @click="queryFormFieldsEmpty('certno')"/>
                        </ta-input>
                    </ta-form-item>
                </ta-form>
                <div style="text-align: right">
                    <ta-button @click="collapse">
                        <ta-icon type="down" v-if="collapsed"/>
                        <span v-if="collapsed">展开</span>
                        <ta-icon type="up" v-if="!collapsed"/>
                        <span v-if="!collapsed">收起</span>
                    </ta-button>
                    <ta-button
                            title="重置查询条件"
                            :type="isQuery?'danger':'default'"
                            @click="()=>{this.queryForm.resetFields()}">
                        <ta-icon type="reload"/>
                        重置
                    </ta-button>
                    <ta-button title="模糊查询" type="primary" @click="query">
                        <ta-icon type="search"/>
                        查询
                    </ta-button>
                </div>
            </ta-card>
            <ta-card class="fit" :headStyle="headStyle" hoverable>
                <template slot="title">
                    <div><span class="smallIcon"/><span style="font-weight:800">人员基本信息</span></div>
                </template>
                <div slot="extra">
                    <ta-button class="columnsControlPopover">
                        显示/隐藏
                    </ta-button>
                    <ta-button
                            v-if="isQuery||afterAdd"
                            @click="back"
                            title="返回">
                        <ta-icon type="rollback"/>
                        返回
                    </ta-button>
                    <ta-button
                            v-if="!afterAdd"
                            @click="refresh"
                            title="刷新数据">
                        <ta-icon type="sync"/>
                        刷新
                    </ta-button>
                    <ta-button
                            type="primary"
                            @click="showModal"
                            title="新增数据">
                        <ta-icon type="plus"/>
                        新增
                    </ta-button>
                </div>
                <ta-modal
                        title="新增数据"
                        :visible="modalVisible"
                        :footer="null"
                        @cancel="handleCancel"
                        :bodyStyle="{paddingBottom: '0'}">
                    <ta-form
                            layout="horizontal"
                            :form-layout="true"
                            :col="1"
                            :autoFormCreate="(form)=>{this.addForm = form}">
                        <ta-form-item
                                label="姓名"
                                :required="true"
                                fieldDecoratorId="psnName"
                                :has-feedback="this.addFormFeedback.psnName"
                                :fieldDecoratorOptions="{validateTrigger: ['blur'],validateFirst:true,rules: [{validator:psnNameValidate}]}">
                            <ta-input placeholder="请输入姓名" autocomplete="off"
                                      @change="addFormFieldsChange($event,'psnName')"
                                      @pressEnter="addFormFieldsEnter('psnName')"
                                      @focus="addFormFieldsFocus($event,'psnName')"/>
                        </ta-form-item>
                        <ta-form-item
                                :initValue="addFormCertType"
                                label="证件类型"
                                fieldDecoratorId="psnCertType"
                                :require="{message:'请选择证件类型'}">
                            <ta-select collection-type="psn_cert_type" @change="handleCertTypeChange" showSearch/>
                        </ta-form-item>
                        <ta-form-item
                                v-if="addFormCertType==='01'"
                                label="居民身份证号"
                                :required="true"
                                fieldDecoratorId="certno"
                                :has-feedback="this.addFormFeedback.certno"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{idCard:'2',message:'请输入正确的居民身份证号'},{validator:addFormCertnoValidate}]}">
                            <ta-input placeholder="请输入居民身份证号" oninput="value=value.replace(/[^0-9a-zA-Z]/g,'')"
                                      autocomplete="off" maxLength="18" @change="addFormFieldsChange($event,'certno')"
                                      @focus="addFormFieldsFocus($event,'certno')"
                                      @blur="()=>{this.addFormFeedback.certno=true}"
                                      @pressEnter="addFormFieldsEnter('certno')"/>
                        </ta-form-item>
                        <ta-form-item
                                v-if="addFormCertType!=='01'"
                                label="证件号码"
                                :required="true"
                                fieldDecoratorId="certno"
                                :has-feedback="this.addFormFeedback.certno"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{validator:addFormCertnoValidate}]}">
                            <ta-input placeholder="请输入证件号" autocomplete="off"
                                      @focus="addFormFieldsFocus($event,'certno')"
                                      @blur="()=>{this.addFormFeedback.certno=true}"
                                      @change="addFormFieldsChange($event,'certno')"
                                      oninput="value=value.replace(/[^0-9a-zA-Z]/g,'')"
                                      @pressEnter="addFormFieldsEnter('certno')"/>
                        </ta-form-item>
                        <ta-form-item initValue="1" label="性别" fieldDecoratorId="gend">
                            <ta-select collection-type="sex"/>
                        </ta-form-item>
                        <ta-form-item initValue="01" label="民族" fieldDecoratorId="naty">
                            <ta-select collection-type="naty_type" showSearch/>
                        </ta-form-item>
                        <ta-form-item
                                :initValue="moment('2020-01-01','YYYY-MM-DD')"
                                label="出生日期"
                                :require="{message:'请选择出生日期'}"
                                fieldDecoratorId="brdy">
                            <ta-date-picker placeholder="请选择出生日期" style="width: 100%"/>
                        </ta-form-item>
                        <ta-form-item
                                label="邮箱地址"
                                :required="true"
                                fieldDecoratorId="email"
                                :has-feedback="this.addFormFeedback.email"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{ type: 'email', message: '请输入正确的邮箱地址' },{validator:addFormEmailValidate}]}">
                            <ta-input
                                    placeholder="请输入邮箱地址"
                                    autocomplete="off"
                                    @pressEnter="addFormFieldsEnter('email')"
                                    @change="addFormFieldsChange($event,'email')"
                                    @focus="addFormFieldsFocus($event,'email')"
                                    @blur="()=>{this.addFormFeedback.email=true}"
                            />
                        </ta-form-item>
                        <ta-form-item
                                label="居住地址"
                                fieldDecoratorId="liveAddr"
                                :required="true"
                                :has-feedback="this.addFormFeedback.liveAddr"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{validator:addressValidate}]}">
                            <ta-input placeholder="请输入居住地址" autocomplete="off"
                                      @pressEnter="addFormFieldsEnter('liveAddr')"
                                      @change="addFormFieldsChange($event,'liveAddr')"
                                      @focus="addFormFieldsFocus($event,'liveAddr')"/>
                        </ta-form-item>
                        <ta-form-item
                                label="手机号码"
                                fieldDecoratorId="mob"
                                :required=true
                                :has-feedback="this.addFormFeedback.mob"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{ type: 'phone', message: '请输入正确的手机号码' },{validator:addFormMobValidate}]}">
                            <ta-input placeholder="请输入手机号码" autocomplete="off" maxLength="11"
                                      @blur="()=>{this.addFormFeedback.mob=true}"
                                      oninput="value=value.replace(/[^\d]/g,'')"
                                      @pressEnter="addFormFieldsEnter('mob')"
                                      @change="addFormFieldsChange($event,'mob')"
                                      @focus="addFormFieldsFocus($event,'mob')"/>
                        </ta-form-item>
                        <ta-form-item label=" ">
                            <div :style="{float: 'right' }">
                                <ta-button
                                        type="dashed"
                                        @click="addFormReset"
                                        title="重置数据">
                                    重置
                                </ta-button>
                                <ta-button
                                        @click="handleCancel"
                                        title="取消">
                                    取消
                                </ta-button>
                                <ta-button
                                        type="primary"
                                        @click="handleOk"
                                        title="提交数据">
                                    提交
                                </ta-button>
                            </div>
                        </ta-form-item>
                    </ta-form>
                </ta-modal>
                <ta-drawer
                        placement="top"
                        :closable="false"
                        @close="handleDrawerClose"
                        :visible="drawerVisible"
                        height="300px">
                    <span slot="title" style="font-weight:800;">人员信息修改</span>
                    <ta-form layout="horizontal"
                             :form-layout="true"
                             :col="{xs:1,sm:2,md:2,lg:3}"
                             :auto-form-create="(form)=>{this.editForm=form}">
                        <ta-form-item
                                label='人员编号'
                                fieldDecoratorId="psnNo"
                                :disabled="true">
                            <ta-input/>
                        </ta-form-item>
                        <ta-form-item
                                label='姓名'
                                :required="true"
                                fieldDecoratorId="psnName"
                                :has-feedback="this.editFormFeedback.psnName"
                                :fieldDecoratorOptions="{validateTrigger: ['blur'],validateFirst:true,rules: [{validator:psnNameValidate}]}">
                            <ta-input autocomplete="off"
                                      placeholder="请输入姓名"
                                      @change="editFormFieldsChange($event,'psnName')"
                                      @pressEnter="editFormFieldsEnter('psnName')"
                                      @focus="editFormFieldsFocus($event,'psnName')"/>
                        </ta-form-item>
                        <ta-form-item
                                label='别名'
                                fieldDecoratorId="alis"
                                :has-feedback="this.editFormFeedback.alis"
                                :fieldDecoratorOptions="{validateTrigger: ['blur'],validateFirst:true,rules: [{validator:alisValidate}]}">
                            <ta-input autocomplete="off"
                                      placeholder="别名允许为空"
                                      @change="editFormFieldsChange($event,'alis')"
                                      @pressEnter="editFormFieldsEnter('alis')"
                                      @focus="editFormFieldsFocus($event,'alis')"/>
                        </ta-form-item>
                        <ta-form-item
                                label='证件类型'
                                fieldDecoratorId="psnCertType"
                                :require="{message:'请选择证件类型'}">
                            <ta-select collection-type="psn_cert_type" @change="handleCertTypeChange" showSearch/>
                        </ta-form-item>
                        <ta-form-item
                                v-if="editFormCertType==='01'"
                                label='身份证号'
                                fieldDecoratorId="certno"
                                :required="true"
                                :has-feedback="this.editFormFeedback.certno"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{idCard:'2',message:'请输入正确的居民身份证号'},{validator:editFormCertnoValidate}]}">
                            <ta-input oninput="value=value.replace(/[^0-9a-zA-Z]/g,'')" autocomplete="off"
                                      placeholder="请输入居民身份证号码"
                                      @change="editFormFieldsChange($event,'certno')"
                                      @pressEnter="editFormFieldsEnter('certno')"
                                      @blur="()=>{this.editFormFeedback.certno=true}"
                                      @focus="editFormFieldsFocus($event,'certno')"/>
                        </ta-form-item>
                        <ta-form-item
                                v-if="editFormCertType!=='01'"
                                label='证件号码'
                                fieldDecoratorId="certno"
                                :required="true"
                                :has-feedback="this.editFormFeedback.certno"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{validator:editFormCertnoValidate}]}">
                            <ta-input oninput="value=value.replace(/[^0-9a-zA-Z]/g,'')" autocomplete="off"
                                      placeholder="请输入证件号码"
                                      @change="editFormFieldsChange($event,'certno')"
                                      @pressEnter="editFormFieldsEnter('certno')"
                                      @focus="editFormFieldsFocus($event,'certno')"/>
                        </ta-form-item>
                        <ta-form-item
                                label='性别'
                                fieldDecoratorId="gend"
                                :require="{message:'请选择性别'}">
                            <ta-select collection-type="sex"/>
                        </ta-form-item>
                        <ta-form-item
                                label='出生日期'
                                fieldDecoratorId="brdy"
                                :require="{message:'请选择出生日期'}">
                            <ta-date-picker style="width:100%"/>
                        </ta-form-item>
                        <ta-form-item
                                label='联系电话'
                                fieldDecoratorId="tel"
                                :has-feedback="this.editFormFeedback.tel"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{validator:editFormTelValidate}]}">
                            <ta-input autocomplete="off"
                                      placeholder="联系电话允许为空"
                                      @change="editFormFieldsChange($event,'tel')"
                                      @pressEnter="editFormFieldsEnter('tel')"
                                      @focus="editFormFieldsFocus($event,'tel')"/>
                        </ta-form-item>
                        <ta-form-item
                                label='手机号码'
                                fieldDecoratorId="mob"
                                :required="true"
                                :has-feedback="this.editFormFeedback.mob"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{type:'phone',message:'请输入正确的手机号码'},{validator:editFormMobValidate}]}">
                            <ta-input autocomplete="off" maxlength="11" oninput="value=value.replace(/[^0-9]/g,'')"
                                      placeholder="请输入手机号码"
                                      @change="editFormFieldsChange($event,'mob')"
                                      @pressEnter="editFormFieldsEnter('mob')"
                                      @blur="()=>{this.editFormFeedback.mob=true}"
                                      @focus="editFormFieldsFocus($event,'mob')"/>
                        </ta-form-item>
                        <ta-form-item
                                label='邮箱地址'
                                fieldDecoratorId="email"
                                :required="true"
                                :has-feedback="this.editFormFeedback.email"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{ type: 'email', message: '请输入正确的邮箱地址' },{validator:editFormEmailValidate}]}">
                            <ta-input autocomplete="off"
                                      placeholder="请输入邮箱地址"
                                      @change="editFormFieldsChange($event,'email')"
                                      @pressEnter="editFormFieldsEnter('email')"
                                      @blur="()=>{this.editFormFeedback.email=true}"
                                      @focus="editFormFieldsFocus($event,'email')"/>
                        </ta-form-item>
                        <ta-form-item
                                label='居住地址'
                                fieldDecoratorId="liveAddr"
                                :required="true"
                                :has-feedback="this.editFormFeedback.liveAddr"
                                :fieldDecoratorOptions="{validateTrigger:['blur'],validateFirst:true,rules:[{validator:addressValidate}]}">
                            <ta-input autocomplete="off"
                                      placeholder="请输入居住地址"
                                      @change="editFormFieldsChange($event,'liveAddr')"
                                      @pressEnter="editFormFieldsEnter('liveAddr')"
                                      @focus="editFormFieldsFocus($event,'liveAddr')"/>
                        </ta-form-item>
                        <ta-form-item
                                label='民族'
                                fieldDecoratorId="naty"
                                :require="{message:'请选择民族'}">
                            <ta-select collection-type="naty"/>
                        </ta-form-item>
                    </ta-form>
                    <div slot="footer">
                        <ta-button type="dashed" @click="handleReset">
                            重置
                        </ta-button>
                        <ta-button @click="()=>{this.drawerVisible=false}">取消</ta-button>
                        <ta-button type="primary" @click="handleEditCommit">提交</ta-button>
                    </div>
                </ta-drawer>
                <ta-drawer placement="left"
                           :closable="false"
                           :width="300"
                           @close="()=>{this.infoDrawerVisible=false}"
                           :visible="infoDrawerVisible">
                    <span slot="title" style="font-weight:800;">人员信息</span>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>人员编号：</span></ta-col>
                        <ta-col span="12">{{currentRecord.psnNo}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>姓名：</span></ta-col>
                        <ta-col span="12">{{currentRecord.psnName}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>别名：</span></ta-col>
                        <ta-col span="12">{{currentRecord.alis}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>证件类型：</span></ta-col>
                        <ta-col span="12">{{currentRecord.psnCertType}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>证件号码：</span></ta-col>
                        <ta-col span="12">{{currentRecord.certno}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>性别：</span></ta-col>
                        <ta-col span="12">{{currentRecord.gend==='1'?'男':'女'}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>出生日期：</span></ta-col>
                        <ta-col span="12">{{currentRecord.brdy}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>联系电话：</span></ta-col>
                        <ta-col span="12">{{currentRecord.tel}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>手机号码：</span></ta-col>
                        <ta-col span="12">{{currentRecord.mob}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>邮箱地址：</span></ta-col>
                        <ta-col span="12">{{currentRecord.email}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>居住地址：</span></ta-col>
                        <ta-col span="12">{{currentRecord.liveAddr}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>民族：</span></ta-col>
                        <ta-col span="12">{{currentRecord.naty}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>毕业院校：</span></ta-col>
                        <ta-col span="12">{{currentRecord.gradSchl}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>学历：</span></ta-col>
                        <ta-col span="12">{{currentRecord.educ}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>创建时间：</span></ta-col>
                        <ta-col span="12">{{currentRecord.crteTime}}</ta-col>
                    </ta-row>
                    <ta-row>
                        <ta-col span="12" :style="{textAlign:'right'}"><span>更新时间：</span></ta-col>
                        <ta-col span="12">{{currentRecord.updtTime}}</ta-col>
                    </ta-row>
                </ta-drawer>
                <ta-table
                        :columns.sync="columns"
                        :dataSource="tableData"
                        :scroll=" {x: 2000, y: '100%'}"
                        :haveSn="true" @change="handleChange" ref="hideOrShowTable">
                    <!--<span slot="psnNameTitle">姓名<ta-tooltip :title="columnsStatus.psnName?'展开改列':'折叠改列'"><ta-icon
                  style="margin-left:5px" @click="()=>{columnsStatus.psnName?showColumn('psnName'):hideColumn('psnName')}"
                  :type="columnsStatus.psnName?'plus-circle':'minus-circle'"/></ta-tooltip></span>-->
                    <span slot="psnNameTitle">姓名<ta-icon type="edit"/></span>
                    <span slot="alisTitle">别名<ta-icon type="edit"/></span>
                    <span slot="psnCertTypeTitle">证件类型<ta-icon type="edit"/></span>
                    <span slot="certnoTitle">证件号<ta-icon type="edit"/></span>
                    <span slot="gendTitle">性别</span>
                    <span slot="brdyTitle">出生日期<ta-icon type="edit"/></span>
                    <span slot="telTitle">联系电话<ta-icon type="edit"/></span>
                    <span slot="mobTitle">手机号码<ta-icon type="edit"/></span>
                    <span slot="emailTitle">邮箱地址<ta-icon type="edit"/></span>
                    <span slot="crteTimeTitle">创建时间
                        <!--<span style="position: relative;left: 2px">
                        <ta-tooltip title="升序" placement="right">
                        <ta-icon type="caret-up"
                      @click="crteTimeSorted('ascend')"
                      style="position: absolute;top: -2px"
                      :style="{color:crteTimeSortedInfo?crteTimeSortedInfo.order==='ascend'?'red':'':''}"/>
                        </ta-tooltip>
                        <ta-tooltip title="降序" placement="right">
                        <ta-icon type="caret-down"
                      @click="crteTimeSorted('descend')"
                      style="position: absolute;top: 8px"
                      :style="{color:crteTimeSortedInfo?crteTimeSortedInfo.order==='descend'?'red':'':''}"/>
                        </ta-tooltip>
                        </span>-->
                    </span>
                    <span slot="liveAddrTitle">居住地址<ta-icon type="edit"/></span>
                    <ta-tooltip slot="psnNo" slot-scope="text" placement="top" :title="`人员编号：${text}`">{{text}}
                    </ta-tooltip>
                    <span slot="action" slot-scope="text, record">
                        <a type="primary" @click="handleRowChange(record)">修改</a><ta-divider type="vertical"/>
                        <ta-popconfirm title="你确定要删除该人员信息吗?" @confirm="handleRowDelete(record.psnNo)"
                                       okText="确定" cancelText="取消" okType="danger" arrowPointAtCenter
                                       placement="left">
                            <ta-icon slot="icon" type="exclamation-circle" style="color: red"/>
                            <a type="primary">删除</a>
                        </ta-popconfirm><ta-divider type="vertical"/>
                        <a type="primary" @click="showInfo(record)">查看</a>
                    </span>
                    <template slot="footer">
                        <ta-pagination
                                v-show="!afterAdd"
                                style="float: left;margin-top: 10px"
                                :dataSource.sync="tableData"
                                url="personInfo/queryPsnInfoBInfoPage"
                                ref="gridPager"
                                :params="userPageParams"
                                :pageSizeOptions="['10','20','30','40','50']"
                                @change="handlePageChange"
                                @showSizeChange="handlePageSizeChange"
                        />
                    </template>
                </ta-table>
            </ta-card>
        </ta-border-layout>
    </div>
</template>
<script>

  import moment from 'moment'
  import $ from 'jquery'

  const columns = [
    {
      title: '人员编号',
      dataIndex: 'psnNo',
      width: 300,
      scopedSlots: { customRender: 'psnNo', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'psnName',
      width: 200,
      slots: { title: 'psnNameTitle', },
      scopedSlots: { customRender: 'psnName', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'alis',
      width: 200,
      slots: { title: 'alisTitle', },
      scopedSlots: { customRender: 'alis', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'psnCertType',
      width: 300,
      slots: { title: 'psnCertTypeTitle', },
      scopedSlots: { customRender: 'psnCertType', },
      overflowTooltip: true,
      collectionType: 'psnCertType'
    },
    {
      dataIndex: 'certno',
      width: 300,
      slots: { title: 'certnoTitle', },
      scopedSlots: { customRender: 'certno', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'gend',
      width: 300,
      slots: { title: 'gendTitle', },
      scopedSlots: { customRender: 'gend', },
      overflowTooltip: true,
      collectionType: 'sex',
      filters: [
        {
          text: '男',
          value: '1'
        },
        {
          text: '女',
          value: '2'
        },
      ],
      onFilter: (value, record) => {
        return record.gend === value
      },
    },
    {
      dataIndex: 'brdy',
      width: 300,
      slots: { title: 'brdyTitle', },
      scopedSlots: { customRender: 'brdy', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'tel',
      width: 300,
      slots: { title: 'telTitle', },
      scopedSlots: { customRender: 'tel', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'mob',
      width: 200,
      slots: { title: 'mobTitle', },
      scopedSlots: { customRender: 'mob', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'email',
      width: 300,
      slots: { title: 'emailTitle', },
      scopedSlots: { customRender: 'email', },
      overflowTooltip: true,
    },
    {
      dataIndex: 'liveAddr',
      width: 300,
      slots: { title: 'liveAddrTitle', },
      scopedSlots: { customRender: 'liveAddr', },
      overflowTooltip: true,
    },
    {
      title: '民族',
      dataIndex: 'naty',
      width: 300,
      scopedSlots: { customRender: 'naty', },
      collectionType: 'naty',
    },
    {
      title: '毕业院校',
      dataIndex: 'gradSchl',
      width: 300,
      scopedSlots: { customRender: 'gradSchl', },
    },
    {
      title: '学历',
      dataIndex: 'educ',
      width: 300,
      scopedSlots: { customRender: 'educ', },
    },
    {
      dataIndex: 'crteTime',
      width: 200,
      slots: { title: 'crteTimeTitle', },
      scopedSlots: { customRender: 'crteTime', },
      sorter: (a, b) => {
        const flag = moment(a.crteTime, 'YYYY-MM-DD').isAfter(moment(b.crteTime, 'YYYY-MM-DD'))
        if (flag) {
          return 1
        } else {
          return -1
        }
      },
    },
    {
      title: '修改时间',
      dataIndex: 'updtTime',
      width: 200,
      scopedSlots: { customRender: 'crteTime', },
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 200,
      scopedSlots: { customRender: 'action', },
      fixed: 'right',
    }]
  export default {
    data () {
      return {
        tableData: [],
        dataSource: [],
        modalVisible: false,
        drawerVisible: false,
        collapsed: true,
        psnNo: '',
        moment,
        columns,
        formStyle: {},
        psnCertType: '01',
        pageInfo: {
          pageNumber: 1,
          pageSize: 10,
        },
        queryPageInfo: {
          pageNumber: 1,
          pageSize: 10,
        },
        afterAdd: false,
        isQuery: false,
        queryData: {},
        screenWidth: 0,
        headStyle: {
          'border-bottom-width': '0',
          'padding-bottom': '0px'
        },
        addFormCertType: '01',
        editFormCertType: '',
        isSelect: false,
        addFormDataRecord: {
          certno: '',
          email: '',
          mob: ''
        },
        editFormDataRecord: {
          certno: '',
          email: '',
          mob: '',
          tel: ''
        },
        addFormFeedback: {
          psnName: false,
          certno: false,
          email: false,
          liveAddr: false,
          mob: false,
        },
        editFormFeedback: {
          psnName: false,
          alis: false,
          certno: false,
          tel: false,
          liveAddr: false,
          mob: false,
          email: false
        },
        queryFormEmptyFlag: {
          psnNo: false,
          psnName: false,
          mob: false,
          email: false,
          certno: false
        },
        crteTimeSortedInfo: null,
        editFormInitValue: {},
        editRecord: {},
        infoDrawerVisible: false,
        currentRecord: {}
      }
    },
    beforeMount () {
      this.columns.forEach((item, index) => {
        item.key = index + 1
      })
    },
    mounted () {
      this.$refs.gridPager.loadData((data) => {
        console.log(data)
      })
      this.screenWidth = document.body.clientWidth
      //初始化页面时，设置查询表单的宽度
      if (this.screenWidth < 576) { // xs
        $('#queryForm').css('height', '168px')
      } else if (this.screenWidth < 992) { // sm
        $('#queryForm').css('height', '112px')
      } else { // lg
        $('#queryForm').css('height', '56px')
      }
      //监听窗口宽度的变化，动态改变查询表单的宽度
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth
          if (this.collapsed) {
            if (this.screenWidth < 576) { // xs
              $('#queryForm').css('height', '168px')
            } else if (this.screenWidth < 992) { // sm、md
              $('#queryForm').css('height', '112px')
            } else { // lg
              $('#queryForm').css('height', '56px')
            }
          } else {
            if (this.screenWidth < 576) { // xs
              $('#queryForm').css('height', '336px')
            } else if (this.screenWidth < 992) { // sm、md
              $('#queryForm').css('height', '168px')
            } else { // lg
              $('#queryForm').css('height', '112px')
            }
          }
          // this.screenHeight = document.body.clientHeight
        })()
      }
    },
    computed: {},
    watch: {
      tableData () {
        let count = 1
        this.tableData.forEach((item) => {
        })
      },
    },
    destroyed () {//关闭窗口的监听
      window.onresize=null
    },
    methods: {
      handleRowDelete (psnNo) {
        this.Base.submit(null, {
          url: 'personInfo/removePsnInfoBById',
          data: { psnNo },
        }, {
          successCallback: (data) => {
            this.$message.success('人员信息删除成功')
            if (this.afterAdd) { // 处于增加后的状态，重置状态
              this.afterAdd = false
              this.refresh()
            } else {
              if (this.isSelect) {
                this.back()
              } else {
                this.refresh()
              }
            }
          },
          failCallback: (data) => {
          },
        })
      },
      handleRowChange (record) {
        this.drawerVisible = true
        this.editFormInitValue = JSON.parse(JSON.stringify(record))
        this.editFormInitValue.brdy = this.moment(record.brdy, 'YYYY-MM-DD')
        setTimeout(() => {
          this.editForm.resetFields()
          this.editForm.setFieldsValue(this.editFormInitValue)
        }, 100)
        this.editRecord = record
        this.editFormCertType = record.psnCertType
      },
      handleReset () {
        this.editForm.resetFields()
        this.editForm.setFieldsValue(this.editFormInitValue)
        for (const key in this.editFormDataRecord) {
          this.editFormDataRecord[key] = ''
        }
        for (const key in this.editFormFeedback) {
          this.editFormFeedback[key] = false
        }
      },
      handleEditCommit () { // 点击“保存”时第一个被触发
        const formData = this.editForm.getFieldsValue()
        let flag = false
        for (const item in formData) {
          if (typeof formData[item] === 'string') {
            formData[item] = formData[item].trim()
            if (formData[item] !== this.editFormInitValue[item]) { // 判断是否有数据被修改
              flag = true
            }
          } else if (typeof formData[item] === 'object') {
            if (!formData[item].isSame(this.editFormInitValue[item])) {
              flag = true
            }
          }
        }
        if (!flag) {
          this.$message.error('未修改任何数据', 1)
          return
        }
        formData.brdy = formData.brdy.format('YYYY-MM-DD')
        // 有数据被修改
        this.Base.submit(this.editForm, {
          url: 'personInfo/editPsnInfoBInfo',
          data: formData,
          autoValid: true
        }, {
          successCallback: (d) => {
            if (d.data.resultData.code === 200) {
              this.$message.success(d.data.resultData.message, 1)
              //人员信息修改成功，更新本地显示的信息
              Object.assign(this.editRecord, formData)

              //更新初始化editFormInitValue的值，以便重置数据时，内容是最新的状态
              formData.brdy = moment(formData.brdy, 'YYYY-MM-DD')
              Object.assign(this.editFormInitValue, formData)
              this.editRecord.updtTime = moment().format('YYYY-MM-DD')
              if (this.isSelect) {
                //如果是选择主键的查询，则更新查询条件的显示
                this.queryForm.setFieldsValue(this.editRecord)
              }
            }
            if (d.data.resultData.code === 100) {
              this.$message.error(d.data.resultData.message, 1)
            }
          },
          failCallback: (d) => {
          },
        })
      },
      handleDrawerClose () {
        this.drawerVisible = false
        for (const key in this.editFormFeedback) {
          this.editFormFeedback[key] = false
        }
        for (const key in this.editFormDataRecord) {
          this.editFormDataRecord[key] = ''
        }
      },
      showModal () {
        this.modalVisible = true
      },
      handleCancel (e) {
        this.modalVisible = false
      },
      handleOk (e) { // 表单提交
        const formData = this.addForm.getFieldsValue()
        for (const key in formData) {
          if (typeof (formData[key]) === 'string') {
            formData[key] = formData[key].trim()
          } else if (formData[key] && typeof formData[key] === 'object') {
            formData[key] = formData[key].format('YYYY-MM-DD')
          }
        }
        // 将表单数据提交给后台
        // this.confirmLoading = true
        this.Base.submit(
          this.addForm, {
            url: 'personInfo/addPsnInfoBInfo',
            data: formData,
            autoValid: true,
          }, {
            successCallback: (data) => {
              if (data.data.resultData.code === 200) { // 添加信息成功
                console.log(data)
                this.$message.success(data.data.resultData.message, 1)
                this.modalVisible = false
                this.tableData = []
                data.data.resultData.data.crteTime = data.data.resultData.data.crteTime.split(' ')[0]
                data.data.resultData.data.updtTime = data.data.resultData.data.updtTime.split(' ')[0]
                this.tableData[0] = data.data.resultData.data
                this.afterAdd = true
                this.addFormReset()
              }
              if (data.data.resultData.code === 100) {
                this.$message.error(data.data.resultData.message, 1)
              }
            },
            failCallback: (data) => {
              console.log('error')
            },
          })
      },
      handleSearch (psnNo) {
        if (psnNo) {
          this.Base.submit(null, {
            url: 'personInfo/queryPsnNoList',
            data: { psnNo, },
          }, {
            successCallback: (data) => {
              this.dataSource = data.data.resultData
            },
            failCallback: (data) => {
            },
          })
        } else {
          this.dataSource = []
        }
      },
      onSelect (psnNo) { // 选择编号时，查询该编号对应人员的信息
        if (psnNo) {
          this.psnNo = psnNo
          this.queryData = { psnNo, }
          // 默认pageSize为10
          this.queryData.pageSize = 10
          this.$refs.gridPager.loadData((data) => {
            this.queryForm.setFieldsValue(data.data.pageBean.list[0])
            this.isQuery = true
            this.isSelect = true
            this.$refs.gridPager.$refs.vcPage.statePageSize = 10
            // 删除属性
            delete this.queryData.pageSize
            this.afterAdd = false
          })
          // this.handleSearch(psnNo)
        }
      },
      query () {
        // 没有输入任何数据就进行查询，默认行为是不尽兴任何查询操作
        let inputFlag = false
        // 判断查询条件是否与上一次相同(默认相同)
        let sameFlag = true
        // 将输入的内容除去首位的空格
        const data = this.queryForm.getFieldsValue()
        for (const item in data) {
          if (data[item]) {
            // 只有当有一个查询数据就能进行查询操作
            data[item] = data[item].trim()
            if (!inputFlag) {
              if (data[item]) {
                inputFlag = true
              }
            }
            if (sameFlag) { // 判断查询条件是否改变
              if (this.queryData[item] && this.queryData[item] !== data[item]) {
                sameFlag = false
              }
              if (!this.queryData[item] && data[item]) {
                sameFlag = false
              }
            }
          } else if (this.queryData[item]) {
            sameFlag = false
          }
        }
        // console.log('inputFlag：' + inputFlag, 'sameFlag：' + sameFlag)
        if (inputFlag) { // 有查询条件
          this.isQuery = true
          this.isSelect = false
          if (!sameFlag || !this.queryData.vague) { // 先后的查询条件不一致，跳转到第一页
            this.queryData = data
            this.queryData.vague = true
            this.queryData.pageSize = 10
            this.$refs.gridPager.loadData((d) => {
              // 每一次新查询的默认pageSize为10
              this.$refs.gridPager.$refs.vcPage.statePageSize = 10
              // 删除pageSize属性，以此避免每次请求时请求参数中都带有pageSize属性，导致在页面中设置pageSize时，
              // 不会将设置的pageSize传入到后端，而总是将在这里设置的pageSize=10传到后端，从而导致查询的数据量和前端设置的pageSize不一致
              // 如果不删除pageSize属性，那么上述问题的解决办法就是：在改变pageSize时，在回调函数中更新this.queryData.pageSize的值，这样就会使前后端的pageSize一致了
              delete this.queryData.pageSize

              // 如果是在增加后就进行查询操作，修改afterAdd状态
              this.afterAdd = false
            })
          } else {
            // 查询条件一致，点击查询跳转到当前页
            // this.jumpTo(this.$refs.gridPager.$refs.vcPage.stateCurrent, true)
            this.$message.error('与上次查询条件一致，若需刷新数据，请点击刷新按钮', 1.5)
          }
        } else {
          this.$message.error('未输入任何查询数据，不进行查询操作', 1)
        }
      },
      collapse () {
        if (this.collapsed) {
          // $('#queryForm').css('height', '336px')
          if (this.screenWidth < 576) { // xs
            $('#queryForm').css('height', '336px')
          } else if (this.screenWidth < 992) { // md
            $('#queryForm').css('height', '168px')
          } else { // lg
            $('#queryForm').css('height', '112px')
          }
        } else {
          if (this.screenWidth < 576) { // xs
            $('#queryForm').css('height', '168px')
          } else if (this.screenWidth < 992) { // sm
            $('#queryForm').css('height', '112px')
          } else { // lg
            $('#queryForm').css('height', '56px')
          }
        }
        this.collapsed = !this.collapsed
      },
      userPageParams () {
        // 这里返回的对象是分页要一同提交的参数
        return this.queryData
      },
      handlePageChange (page, pageSize) {
        if (!this.isQuery) { // 非数据查询状态，而是数据展示状态
          this.pageInfo.pageNumber = page
        } else { // 数据查询状态
          this.queryPageInfo.pageNumber = page
        }
      },
      handlePageSizeChange (current, size) {
        if (!this.isQuery) {
          this.pageInfo.pageNumber = current
          this.pageInfo.pageSize = size
        } else {
          this.queryPageInfo.pageNumber = current
          this.queryPageInfo.pageSize = size
        }
      },
      psnNameValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          let reg = /^[\u4E00-\u9FA5]+$/
          if (!reg.test(value)) {
            callback('姓名必须全是中文')
          } else if (value.length >= 2 && value.length <= 5) {
            callback()
          } else {
            callback('姓名长度在2-5之间')
          }
        } else {
          callback('请输入姓名')
        }
        if (this.modalVisible) {
          this.addFormFeedback.psnName = true
        }
        if (this.drawerVisible) {
          this.editFormFeedback.psnName = true
        }
      },
      alisValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          if (this.editRecord.alis === value.trim()) {
            callback()
          } else if (value.length <= 10) {
            if (value.indexOf(' ') !== -1) {
              callback('别名中不能包含空格')
            } else {
              callback()
            }
          } else {
            callback('别名长度不能大于10')
          }
        } else {
          //允许为空
          this.editFormFeedback.alis = false
          callback()
          return
        }
        this.editFormFeedback.alis = true
      },
      addFormCertnoValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          if (this.addFormDataRecord.certno !== value.trim()) {
            this.Base.submit(null, {
              url: 'personInfo/countNumber',
              data: {
                psnCertType: this.addFormCertType,
                certno: value.trim()
              },
            }).then((data) => {
              if (data.data.resultData !== 0) {
                if (this.addFormCertType === '01') {
                  callback('该居民身份证号已存在')
                } else {
                  callback('当前证件类型的证件号已经存在')
                }
              } else {
                this.addFormDataRecord.certno = value.trim()
                callback()
              }
            })
          } else {
            callback()
          }
        } else {
          this.addFormCertType === '01' ? callback('请输入居民身份证号码') : callback('请输入证件号码')
        }
        this.addFormFeedback.certno = true
      },
      addFormMobValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          if (this.addFormDataRecord.mob !== value.trim()) {
            this.Base.submit(null, {
              url: 'personInfo/countNumber',
              data: {
                mob: value.trim()
              },
            }).then((data) => {
              if (data.data.resultData !== 0) {
                callback('该手机号码已存在')
              } else {
                this.addFormDataRecord.mob = value.trim()
                callback()
              }
            })
          } else {
            callback()
          }

        } else {
          callback('请输入手机号码')
        }
        this.addFormFeedback.mob = true
      },
      addFormEmailValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          if (this.addFormDataRecord.email !== value.trim()) {
            this.Base.submit(null, {
              url: 'personInfo/countNumber',
              data: {
                email: value
              },
            }).then((data) => {
              if (data.data.resultData !== 0) {
                callback('该邮箱已经存在')
              } else {
                this.addFormDataRecord.email = value.trim()
                callback()
              }
            })
          } else {
            callback()
          }
        } else {
          callback('请输入邮箱地址')
        }
        this.addFormFeedback.email = true
      },
      addFormFieldsFocus ({ target }, field) {
        const { value } = target
        this.addForm.setFields({ [field]: { value } })
        this.addFormFeedback[field] = false
      },
      addFormFieldsEnter (field) {
        this.addForm.validateFields([field])
        //因为身份证号码、邮箱、手机号码内置了验证，手动打开feedBack开关
        if (['certno', 'email', 'mob'].indexOf(field) >= 0) {
          this.addFormFeedback[field] = true
        }
      },
      addFormFieldsChange ({ target }, field) {
        const { value } = target
        const help = {
          psnName: '请输入姓名',
          certno: {
            '01': '请输入居民身份证号码',
            'other': '请输入证件号码'
          },
          email: '请输入邮箱地址',
          liveAddr: '请输入居住地址',
          mob: '请输入手机号码'
        }

        if (value) {
          this.addFormFeedback[field] = false
          this.addForm.setFields({ [field]: { value } })
        } else {
          setTimeout(() => {
            this.addFormFeedback[field] = true
          }, 100)
          this.addForm.setFields({
            [field]: {
              value,
              errors: [{ message: field === 'certno' ? this.addFormCertType === '01' ? help[field]['01'] : help[field]['other'] : help[field] }]
            }
          })
        }
      },
      editFormCertnoValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          //检查是否和修改前的值一样，也就是并未改变值，或者改值已经通过了验证
          if (this.editRecord.certno === value.trim() || this.editFormDataRecord.certno === value.trim()) {
            callback()
          } else {
            this.Base.submit(null, {
              url: 'personInfo/countNumber',
              data: {
                psnCertType: this.editFormCertType,
                certno: value.trim()
              },
            }).then((data) => {
              if (data.data.resultData !== 0) {
                if (this.editFormCertType === '01') {
                  callback('该居民身份证号已存在')
                } else {
                  callback('当前证件类型的证件号已经存在')
                }
              } else {
                this.editFormDataRecord.certno = value.trim()
                callback()
              }
            })
          }
        } else {
          this.editFormCertType === '01' ? callback('请输入居民身份证号码') : callback('请输入证件号码')
        }
        this.editFormFeedback.certno = true
      },
      editFormTelValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          if (this.editRecord.tel === value.trim() || this.editFormDataRecord.tel === value.trim()) {
            callback()
          } else if (value) {
            const reg = /^(\(\d{3,4}\)|(\d{3,4}(-|\s)))?\d{7,14}$/
            if (!reg.test(value)) {
              callback('电话号码格式错误')
            } else {
              //验证电话号码是否已经存在
              this.Base.submit(null, {
                url: 'personInfo/countNumber',
                data: {
                  tel: value.trim()
                },
              }).then((data) => {
                if (data.data.resultData !== 0) {
                  callback('该电话号码已经存在')
                } else {
                  this.editFormDataRecord.tel = value.trim()
                  callback()
                }
              })
            }
          } else {
            callback()
          }
        } else {
          //允许为空
          this.editFormFeedback.tel = false
          callback()
          return
        }
        this.editFormFeedback.tel = true
      },
      editFormMobValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          if (this.editRecord.mob === value.trim() || this.editFormDataRecord.mob === value.trim()) {
            callback()
          } else {
            this.Base.submit(null, {
              url: 'personInfo/countNumber',
              data: {
                mob: value
              },
            }).then((data) => {
              if (data.data.resultData !== 0) {
                callback('该手机号码已经存在')
              } else {
                this.editFormDataRecord.mob = value.trim()
                callback()
              }
            })
          }
        } else {
          callback('请输入手机号码')
        }
        this.editFormFeedback.mob = true
      },
      editFormEmailValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          if (this.editRecord.email === value.trim() || this.editFormDataRecord.email === value.trim()) {
            callback()
          } else {
            this.Base.submit(null, {
              url: 'personInfo/countNumber',
              data: {
                email: value.trim()
              },
            }).then((data) => {
              if (data.data.resultData !== 0) {
                callback('该邮箱地址已经存在')
              } else {
                this.editFormDataRecord.email = value.trim()
                callback()
              }
            })
          }
        } else {
          callback('请输入邮箱地址')
        }
        this.editFormFeedback.email = true
      },
      addressValidate (rule, value, callback) {
        if (typeof value === 'string' && value.trim()) {
          callback()
        } else {
          callback('请输入居住地址')
        }
        if (this.modalVisible) {
          this.addFormFeedback.liveAddr = true
        }
        if (this.drawerVisible) {
          this.editFormFeedback.liveAddr = true
        }
      },
      editFormFieldsChange ({ target }, field) {
        const { value } = target
        const help = {
          psnName: '请输入姓名',
          certno: {
            '01': '请输入居民身份证号码',
            'other': '请输入证件号码'
          },
          email: '请输入邮箱地址',
          liveAddr: '请输入居住地址',
          mob: '请输入手机号码',
        }
        if (value) {
          this.editFormFeedback[field] = false
          this.editForm.setFields({ [field]: { value } })
        } else {
          if (!(field === 'alis' || field === 'tel')) {
            setTimeout(() => {
              this.editFormFeedback[field] = true
            }, 100)
            this.editForm.setFields({
              [field]: {
                value,
                errors: [{ message: field === 'certno' ? this.editFormCertType === '01' ? help[field]['01'] : help[field]['other'] : help[field] }]
              }
            })
          }
        }
      },
      editFormFieldsEnter (field) {
        this.editForm.validateFields([field])
        if (['certno', 'email', 'mob',].indexOf(field) >= 0) {
          this.editFormFeedback[field] = true
        }
      },
      editFormFieldsFocus ({ target }, field) {
        const { value } = target
        this.editForm.setFields({ [field]: { value } })
        this.editFormFeedback[field] = false
      },
      handleFocus ({ target }) {
        if (target.value.trim() && this.psnName) {
          this.handleSearch(target.value.trim())
        } else {
          this.dataSource = []
        }
      },
      jumpTo (page, needCount) {
        if (page === 1) { // 当前页是第一页，则不需要先查询总数，因为如果查询第一页会自动查询总数
          this.$refs.gridPager.loadData((data) => {

          })
        } else if (needCount) { // 需要先查询总数
          this.Base.submit(null, {
            url: 'personInfo/queryPsnInfoBInfoPage',
            data: {
              ...this.queryData,
              needCount,
            },
          }).then((data) => {
            this.$refs.gridPager.$refs.vcPage.totalSize = data.data.pageBean.total
            this.$refs.gridPager.$refs.vcPage.handleChange(page)
          })
        }
      },
      test () {
        console.log(this.$refs.gridPager.$refs.vcPage)
      },
      refresh () {
        this.jumpTo(this.$refs.gridPager.$refs.vcPage.stateCurrent, true)
      },
      back () {
        if (this.afterAdd) {
          this.afterAdd = false
          this.refresh()
        } else {
          this.$refs.gridPager.$refs.vcPage.statePageSize = this.pageInfo.pageSize
          this.queryData = { pageSize: this.pageInfo.pageSize }
          this.isQuery = false
          if (this.isSelect) {
            this.queryForm.resetFields()
            this.isSelect = false
          }
          this.jumpTo(this.pageInfo.pageNumber, true)
          // 重置
          this.queryData = {}
        }
      },
      showInfo (record) {
        this.infoDrawerVisible = true
        this.currentRecord = record
      },
      handleCertTypeChange (value) {
        if (this.modalVisible) {
          this.addFormCertType = value
          this.addFormDataRecord.certno = ''
          //切换证件类型时，保留输入的数据，并重新进行校验
          const certno = this.addForm.getFieldValue('certno')
          this.addForm.resetFields(['certno'])
          if (certno) {
            this.addForm.setFieldsValue({ certno })
            setTimeout(() => {
              this.addForm.validateFields(['certno'])
            }, 100)
          }
        }
        if (this.drawerVisible) {
          this.editFormCertType = value
          const certno = this.editForm.getFieldValue('certno')
          this.editForm.resetFields(['certno'])
          if (certno) {
            this.editForm.setFieldsValue({ certno })
            setTimeout(() => {
              this.editForm.validateFields(['certno'])
            }, 100)
          }
        }
      },
      addFormReset () {
        this.addFormCertType = '01'
        this.addForm.resetFields()
        for (const key in this.addFormDataRecord) {
          this.addFormDataRecord[key] = ''
        }
      },
      queryFormFieldsChange ({ target }, field) {
        const { value } = target
        if (value) {
          this.queryFormEmptyFlag[field] = true
        } else {
          setTimeout(() => {
            this.queryFormEmptyFlag[field] = false
          }, 100)
        }
      },
      queryFormFieldsEmpty (field) {
        this.queryForm.setFieldsValue({ [field]: '' })
        this.queryFormEmptyFlag[field] = false
      },
      crteTimeSorted (type) {
        if (this.crteTimeSortedInfo) {
          this.crteTimeSortedInfo.order === type ? this.crteTimeSortedInfo = null : this.crteTimeSortedInfo.order = type
        } else {
          this.crteTimeSortedInfo = {
            order: type,
            columnKey: 'crteTime'
          }
        }
      },
      //表格改变函数,传入分页,过滤,排序参数
      handleChange (pagination, filters, sorter) {
        //设置当前过滤参数为当前选择出的value
        this.filteredInfo = filters.name
        //设置当前排序条件为传入的sorter
        this.crteTimeSortedInfo = sorter
      },
      /*hideColumn(columnName){
        let array = new Array();
        array.push(columnName);
        this.$refs.hideOrShowTable.hideColumns(array);
        this.columnsStatus[columnName] = true;

      },
      showColumn(columnName){
        let array = new Array();
        array.push(columnName)
        this.$refs.hideOrShowTable.showColumns(array);
        this.columnsStatus[columnName] = false;
      }*/
    }
  }
</script>
<style>
    .smallIcon {
        height: 17px;
        width: 6px;
        background: #1e88e5;
        float: left;
        margin-top: 4px;
        margin-right: 5px;
    }

    .ant-table table {
        text-align: center;
    }

    .ant-table-thead > tr > th {
        text-align: center;
        font-weight: 800;
    }

    .ant-modal-title {
        font-weight: 800;
    }

    .ant-alert-message {
        font-weight: 800;
    }

    #queryForm {
        transition: height 1s ease-in-out 0s;
        overflow: hidden;
        -moz-transition: height 1s; /* Firefox 4 */
        -webkit-transition: height 1s; /* Safari and Chrome */
        -o-transition: height 1s; /* Opera */
    }
</style>
