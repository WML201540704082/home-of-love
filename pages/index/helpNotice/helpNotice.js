// pages/index/helpNotice/helpNotice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loction_src:'../../../icons/location.png',
    noticeList:[{
      index:1,
      name:'医疗咨询',
      remark:'患乳腺癌，定期复检，需定期访视',
      status:'待救助',
      address:'北街居委'
    },{
      index:2,
      name:'政策补助、心理咨询',
      remark:'智力残疾，父母离婚，母亲一个人照顾，吃低保维持生活',
      status:'待救助',
      address:'北街居委'
    },{
      index:3,
      name:'出行陪伴、医疗咨询',
      remark:'患鼻癌，离异，还要抚养儿子，一直病假在家，',
      status:'待救助',
      address:'中街居委'
    },{
      index:4,
      name:'政策补助、定期访视',
      remark:'身患精神残疾2级，重残无业',
      status:'待救助',
      address:'中街居委'
    },{
      index:5,
      name:'政策补助、定期访视',
      remark:'父亲患癌于2020年离世，现母子俩享受低保。陈豪初中毕业就未继续升学，现待在家。',
      status:'待救助',
      address:'运河居委'
    },{
      index:6,
      name:'政策补助、定期访视',
      remark:'残疾人，患侏儒症，无儿无女，老伴离世。身体原因不能出门，基本上一个人在家',
      status:'待救助',
      address:'运河居委'
    },{
      index:7,
      name:'政策补助、定期访视',
      remark:'因脑梗引起全身瘫痪，大小便失禁，生活不能自理，镇保退休。儿子是个残疾人',
      status:'待救助',
      address:'南街居委'
    },{
      index:8,
      name:'政策补助、定期访视、医疗咨询',
      remark:'残疾人，丈夫有点老年痴呆，儿子因为住过监狱，现在没有工作吃低保',
      status:'待救助',
      address:'南街居委'
    },{
      index:9,
      name:'政策补助、定期访视、医疗咨询',
      remark:'母亲早逝，父亲是外地的，母亲去世后没多久就离家不联系了，小孩子目前读初二。',
      status:'待救助',
      address:'贝港一居'
    },{
      index:10,
      name:'志愿者服务、医疗咨询、定期访视',
      remark:'低保家庭，夫妻俩都是残疾人，本人去年下半年开始到今年年初住院达六七次',
      status:'待救助',
      address:'贝港一居'
    },{
      index:11,
      name:'政策补助、定期访视',
      remark:'父亲曾吸毒，母亲是外地的，多年前离异，孩子从小在爷爷奶奶身边长大。',
      status:'待救助',
      address:'贝港二居'
    },{
      index:12,
      name:'政策补助、定期访视',
      remark:'低保户，父亲重残无业，他本人在实验小学读二年级，母亲是外来妹，在私人企业打工',
      status:'待救助',
      address:'贝港二居'
    },{
      index:13,
      name:'政策补助、定期访视',
      remark:'丧偶，多年前患有脑瘤，一直服药，去年复发，因病致困，高额医疗费用致使生活困难',
      status:'待救助',
      address:'贝港三居'
    },{
      index:14,
      name:'政策补助、定期访视',
      remark:'其妻子于2020年患上白血病，巨额的医疗费用致使家庭困难，后续还有多次治疗',
      status:'待救助',
      address:'贝港三居'
    },{
      index:15,
      name:'政策补助、定期访视',
      remark:'脑溢血等导致半身瘫痪，其父亲又不幸于今年患了胃癌，其母亲于几年前患有乳腺癌',
      status:'待救助',
      address:'贝港四居'
    },{
      index:16,
      name:'政策补助、医疗咨询',
      remark:'去年4月份患宫颈小细胞癌，手术后进行了化疗放疗等治疗。单亲家庭',
      status:'待救助',
      address:'贝港四居'
    },{
      index:17,
      name:'政策补助、医疗咨询',
      remark:'丧子、年老多病，本人前列腺等各类慢性病，妻子心脏不好，今年摔跤后腰椎有问题',
      status:'待救助',
      address:'贝港五居'
    },{
      index:18,
      name:'政策补助、定期访视',
      remark:'尹帮元及其妻子都是听力残疾人员，家庭生活非常不便，女儿去年也被查出患有癌症',
      status:'待救助',
      address:'贝港五居'
    },{
      index:19,
      name:'定期访视、志愿者服务',
      remark:'低保家庭，父亲尿毒症，丧失劳动能力，且生活无法自理',
      status:'待救助',
      address:'贝港六居'
    },{
      index:20,
      name:'政策补助、定期访视、志愿者服务',
      remark:'常年瘫痪在床，生活不能自理，收入低。生活困难',
      status:'待救助',
      address:'贝港六居'
    },{
      index:21,
      name:'政策补助、定期访视',
      remark:'该居民患有肠癌，经过手术、化疗等，每三个月都要去医院复查一次',
      status:'待救助',
      address:'朝阳居委'
    },{
      index:22,
      name:'政策补助、定期访视',
      remark:'该居民患有肠癌，经过手术、化疗等，对本来就经济状况不好的家庭带来了困难',
      status:'待救助',
      address:'朝阳居委'
    },{
      index:23,
      name:'政策补助、定期访视',
      remark:'家庭一户多残，女儿尚在读书。全家收入仅靠钟仁均一人，经济困难。',
      status:'待救助',
      address:'昊海居委'
    },{
      index:24,
      name:'政策补助、定期访视',
      remark:'谢心岚智力3级，目前就读慧敏学校，父母离异',
      status:'待救助',
      address:'昊海居委'
    },{
      index:25,
      name:'政策补助、定期访视',
      remark:'肢体残疾,身体多病，需要承担医疗费用导致家庭经济困难',
      status:'待救助',
      address:'银河居委'
    },{
      index:26,
      name:'政策补助、定期访视',
      remark:'身患尿毒者，中心医院每周三次血透，医疗费用很大，家庭生活困难。',
      status:'待救助',
      address:'银河居委'
    },{
      index:27,
      name:'政策补助、医疗咨询、定期访视',
      remark:'身患甲状腺癌，需要承担医疗费用，生活困难需要帮助',
      status:'待救助',
      address:'富康居委'
    },{
      index:28,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有乳腺癌，经过多次化疗、放疗、靶向治疗，花费了很多医疗费用，生活困难',
      status:'待救助',
      address:'富康居委'
    },{
      index:29,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有尿毒症，现一直靠血透维持生命，平时还要吃药',
      status:'待救助',
      address:'育秀一居'
    },{
      index:30,
      name:'医疗咨询、定期访视',
      remark:'胃癌、肠癌经过了治疗、化疗，现一直在靠药物维持病情',
      status:'待救助',
      address:'育秀一居'
    },{
      index:31,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有尿毒症，每周三次到中心医院血透，长期吃药，离异',
      status:'待救助',
      address:'育秀二居'
    },{
      index:32,
      name:'政策补助、医疗咨询、定期访视',
      remark:'身患多种老年慢性疾病，长期吃药，腿脚不利索，行动不便',
      status:'待救助',
      address:'育秀二居'
    },
    {
      index:33,
      name:'政策补助、医疗咨询、定期访视',
      remark:'夫妻两人身患胃癌，长期吃药治疗，仅靠退休工资来维持日常，十分困苦',
      status:'待救助',
      address:'育秀三居'
    },{
      index:34,
      name:'政策补助、医疗咨询、定期访视',
      remark:'身患尿毒症长期服药治疗，无法就业，属重残无业，因病现离异无子女',
      status:'待救助',
      address:'育秀三居'
    },{
      index:35,
      name:'政策补助、定期访视',
      remark:'本人经历了离婚，儿子判给父亲，长期治疗、吃药，现在靠退休工资维持生活。',
      status:'待救助',
      address:'育秀五居'
    },{
      index:36,
      name:'政策补助、定期访视',
      remark:'于今年8月10日查出宫颈恶性肿瘤，于9月手术切除，术后化疗，生活困苦',
      status:'待救助',
      address:'育秀五居'
    },{
      index:37,
      name:'政策补助、志愿者服务、定期访视',
      remark:'乳腺恶性肿瘤，开刀化疗，后续一直药物治疗中，医疗费用大，家庭困难）',
      status:'待救助',
      address:'育秀七居'
    },{
      index:38,
      name:'政策补助、定期访视',
      remark:'智力残疾，低保人员，母亲因病去世，父亲已退休，退休工资低，还患有多种慢性病',
      status:'待救助',
      address:'育秀七居'
    },{
      index:39,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'本人丧偶，现处于独居状态，农保。脑梗手术留下了后遗症，生活很困难',
      status:'待救助',
      address:'古华一居'
    },{
      index:40,
      name:'政策补助、医疗咨询、定期访视',
      remark:'本人中风瘫痪在床，生活自理能力较低，收入不高，家庭困难。',
      status:'待救助',
      address:'古华一居'
    },{
      index:41,
      name:'政策补助、医疗咨询、定期访视',
      remark:'本人身患癌症，目前癌细胞已经扩散全身，健康方面有很大的问题',
      status:'待救助',
      address:'古华二居'
    },{
      index:42,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'身患肺癌，身体状况不佳，丧偶，自己一个人生活，较为困难',
      status:'待救助',
      address:'古华二居'
    },{
      index:43,
      name:'医疗咨询、定期访视',
      remark:'身患膀胱肿瘤，健康状况不好，需要治疗，生活较为困难。',
      status:'待救助',
      address:'古华三居'
    },{
      index:44,
      name:'医疗咨询、定期访视',
      remark:'老人年龄较大并且患有长期慢性疾病，身体状况不好，导致生活困难',
      status:'待救助',
      address:'古华三居'
    },{
      index:45,
      name:'政策补助、定期访视、志愿者服务',
      remark:'患有肺癌住院开刀，医药费自费共十几万，现一直配药，做化疗，费用很大，生活很困难',
      status:'待救助',
      address:'江海一居'
    },{
      index:46,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有尿毒症多年，一直靠血透维持生命，医药费用大，生活困难。',
      status:'待救助',
      address:'江海一居'
    },{
      index:47,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有肺、支气管恶性肿瘤，二次大手术，健康状况不好，目前病休在家。',
      status:'待救助',
      address:'江海二居'
    },{
      index:48,
      name:'政策补助、志愿者服务、定期访视',
      remark:'父母离异，父亲因为特殊原因无法找到稳定的工作，爷爷多年瘫痪在床刚去世，奶奶也是镇保退休',
      status:'待救助',
      address:'江海二居'
    },{
      index:49,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'患有肺部肿瘤和左肾输尿管肿瘤，先后于胸科医院和中山医院开刀治疗，已花费巨额医疗费用',
      status:'待救助',
      address:'江海三居'
    },{
      index:50,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'心脏多次手术，装有支架，医疗费用巨大，妻子患有肝癌，生活困难。',
      status:'待救助',
      address:'江海三居'
    },
    {
      index:51,
      name:'医疗咨询',
      remark:'患乳腺癌，定期复检，需定期访视',
      status:'待救助',
      address:'北街居委'
    },{
      index:52,
      name:'政策补助、心理咨询',
      remark:'智力残疾，父母离婚，母亲一个人照顾，吃低保维持生活',
      status:'待救助',
      address:'北街居委'
    },{
      index:53,
      name:'出行陪伴、医疗咨询',
      remark:'患鼻癌，离异，还要抚养儿子，一直病假在家，',
      status:'待救助',
      address:'中街居委'
    },{
      index:54,
      name:'政策补助、定期访视',
      remark:'身患精神残疾2级，重残无业',
      status:'待救助',
      address:'中街居委'
    },{
      index:55,
      name:'政策补助、定期访视',
      remark:'父亲患癌于2020年离世，现母子俩享受低保。陈豪初中毕业就未继续升学，现待在家。',
      status:'待救助',
      address:'运河居委'
    },{
      index:56,
      name:'政策补助、定期访视',
      remark:'残疾人，患侏儒症，无儿无女，老伴离世。身体原因不能出门，基本上一个人在家',
      status:'待救助',
      address:'运河居委'
    },{
      index:57,
      name:'政策补助、定期访视',
      remark:'因脑梗引起全身瘫痪，大小便失禁，生活不能自理，镇保退休。儿子是个残疾人',
      status:'待救助',
      address:'南街居委'
    },{
      index:58,
      name:'政策补助、定期访视、医疗咨询',
      remark:'残疾人，丈夫有点老年痴呆，儿子因为住过监狱，现在没有工作吃低保',
      status:'待救助',
      address:'南街居委'
    },{
      index:59,
      name:'政策补助、定期访视、医疗咨询',
      remark:'母亲早逝，父亲是外地的，母亲去世后没多久就离家不联系了，小孩子目前读初二。',
      status:'待救助',
      address:'贝港一居'
    },{
      index:60,
      name:'志愿者服务、医疗咨询、定期访视',
      remark:'低保家庭，夫妻俩都是残疾人，本人去年下半年开始到今年年初住院达六七次',
      status:'待救助',
      address:'贝港一居'
    },{
      index:61,
      name:'政策补助、定期访视',
      remark:'父亲曾吸毒，母亲是外地的，多年前离异，孩子从小在爷爷奶奶身边长大。',
      status:'待救助',
      address:'贝港二居'
    },{
      index:62,
      name:'政策补助、定期访视',
      remark:'低保户，父亲重残无业，他本人在实验小学读二年级，母亲是外来妹，在私人企业打工',
      status:'待救助',
      address:'贝港二居'
    },{
      index:63,
      name:'政策补助、定期访视',
      remark:'丧偶，多年前患有脑瘤，一直服药，去年复发，因病致困，高额医疗费用致使生活困难',
      status:'待救助',
      address:'贝港三居'
    },{
      index:64,
      name:'政策补助、定期访视',
      remark:'其妻子于2020年患上白血病，巨额的医疗费用致使家庭困难，后续还有多次治疗',
      status:'待救助',
      address:'贝港三居'
    },{
      index:65,
      name:'政策补助、定期访视',
      remark:'脑溢血等导致半身瘫痪，其父亲又不幸于今年患了胃癌，其母亲于几年前患有乳腺癌',
      status:'待救助',
      address:'贝港四居'
    },{
      index:66,
      name:'政策补助、医疗咨询',
      remark:'去年4月份患宫颈小细胞癌，手术后进行了化疗放疗等治疗。单亲家庭',
      status:'待救助',
      address:'贝港四居'
    },{
      index:67,
      name:'政策补助、医疗咨询',
      remark:'丧子、年老多病，本人前列腺等各类慢性病，妻子心脏不好，今年摔跤后腰椎有问题',
      status:'待救助',
      address:'贝港五居'
    },{
      index:68,
      name:'政策补助、定期访视',
      remark:'尹帮元及其妻子都是听力残疾人员，家庭生活非常不便，女儿去年也被查出患有癌症',
      status:'待救助',
      address:'贝港五居'
    },{
      index:69,
      name:'定期访视、志愿者服务',
      remark:'低保家庭，父亲尿毒症，丧失劳动能力，且生活无法自理',
      status:'待救助',
      address:'贝港六居'
    },{
      index:70,
      name:'政策补助、定期访视、志愿者服务',
      remark:'常年瘫痪在床，生活不能自理，收入低。生活困难',
      status:'待救助',
      address:'贝港六居'
    },{
      index:71,
      name:'政策补助、定期访视',
      remark:'该居民患有肠癌，经过手术、化疗等，每三个月都要去医院复查一次',
      status:'待救助',
      address:'朝阳居委'
    },{
      index:72,
      name:'政策补助、定期访视',
      remark:'该居民患有肠癌，经过手术、化疗等，对本来就经济状况不好的家庭带来了困难',
      status:'待救助',
      address:'朝阳居委'
    },{
      index:73,
      name:'政策补助、定期访视',
      remark:'家庭一户多残，女儿尚在读书。全家收入仅靠钟仁均一人，经济困难。',
      status:'待救助',
      address:'昊海居委'
    },{
      index:74,
      name:'政策补助、定期访视',
      remark:'谢心岚智力3级，目前就读慧敏学校，父母离异',
      status:'待救助',
      address:'昊海居委'
    },{
      index:75,
      name:'政策补助、定期访视',
      remark:'肢体残疾,身体多病，需要承担医疗费用导致家庭经济困难',
      status:'待救助',
      address:'银河居委'
    },{
      index:76,
      name:'政策补助、定期访视',
      remark:'身患尿毒者，中心医院每周三次血透，医疗费用很大，家庭生活困难。',
      status:'待救助',
      address:'银河居委'
    },{
      index:77,
      name:'政策补助、医疗咨询、定期访视',
      remark:'身患甲状腺癌，需要承担医疗费用，生活困难需要帮助',
      status:'待救助',
      address:'富康居委'
    },{
      index:78,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有乳腺癌，经过多次化疗、放疗、靶向治疗，花费了很多医疗费用，生活困难',
      status:'待救助',
      address:'富康居委'
    },{
      index:79,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有尿毒症，现一直靠血透维持生命，平时还要吃药',
      status:'待救助',
      address:'育秀一居'
    },{
      index:80,
      name:'医疗咨询、定期访视',
      remark:'胃癌、肠癌经过了治疗、化疗，现一直在靠药物维持病情',
      status:'待救助',
      address:'育秀一居'
    },{
      index:81,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有尿毒症，每周三次到中心医院血透，长期吃药，离异',
      status:'待救助',
      address:'育秀二居'
    },{
      index:82,
      name:'政策补助、医疗咨询、定期访视',
      remark:'身患多种老年慢性疾病，长期吃药，腿脚不利索，行动不便',
      status:'待救助',
      address:'育秀二居'
    },
    {
      index:83,
      name:'政策补助、医疗咨询、定期访视',
      remark:'夫妻两人身患胃癌，长期吃药治疗，仅靠退休工资来维持日常，十分困苦',
      status:'待救助',
      address:'育秀三居'
    },{
      index:84,
      name:'政策补助、医疗咨询、定期访视',
      remark:'身患尿毒症长期服药治疗，无法就业，属重残无业，因病现离异无子女',
      status:'待救助',
      address:'育秀三居'
    },{
      index:85,
      name:'政策补助、定期访视',
      remark:'本人经历了离婚，儿子判给父亲，长期治疗、吃药，现在靠退休工资维持生活。',
      status:'待救助',
      address:'育秀五居'
    },{
      index:86,
      name:'政策补助、定期访视',
      remark:'于今年8月10日查出宫颈恶性肿瘤，于9月手术切除，术后化疗，生活困苦',
      status:'待救助',
      address:'育秀五居'
    },{
      index:87,
      name:'政策补助、志愿者服务、定期访视',
      remark:'乳腺恶性肿瘤，开刀化疗，后续一直药物治疗中，医疗费用大，家庭困难）',
      status:'待救助',
      address:'育秀七居'
    },{
      index:88,
      name:'政策补助、定期访视',
      remark:'智力残疾，低保人员，母亲因病去世，父亲已退休，退休工资低，还患有多种慢性病',
      status:'待救助',
      address:'育秀七居'
    },{
      index:89,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'本人丧偶，现处于独居状态，农保。脑梗手术留下了后遗症，生活很困难',
      status:'待救助',
      address:'古华一居'
    },{
      index:90,
      name:'政策补助、医疗咨询、定期访视',
      remark:'本人中风瘫痪在床，生活自理能力较低，收入不高，家庭困难。',
      status:'待救助',
      address:'古华一居'
    },{
      index:91,
      name:'政策补助、医疗咨询、定期访视',
      remark:'本人身患癌症，目前癌细胞已经扩散全身，健康方面有很大的问题',
      status:'待救助',
      address:'古华二居'
    },{
      index:92,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'身患肺癌，身体状况不佳，丧偶，自己一个人生活，较为困难',
      status:'待救助',
      address:'古华二居'
    },{
      index:93,
      name:'医疗咨询、定期访视',
      remark:'身患膀胱肿瘤，健康状况不好，需要治疗，生活较为困难。',
      status:'待救助',
      address:'古华三居'
    },{
      index:94,
      name:'医疗咨询、定期访视',
      remark:'老人年龄较大并且患有长期慢性疾病，身体状况不好，导致生活困难',
      status:'待救助',
      address:'古华三居'
    },{
      index:95,
      name:'政策补助、定期访视、志愿者服务',
      remark:'患有肺癌住院开刀，医药费自费共十几万，现一直配药，做化疗，费用很大，生活很困难',
      status:'待救助',
      address:'江海一居'
    },{
      index:96,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有尿毒症多年，一直靠血透维持生命，医药费用大，生活困难。',
      status:'待救助',
      address:'江海一居'
    },{
      index:97,
      name:'政策补助、医疗咨询、定期访视',
      remark:'患有肺、支气管恶性肿瘤，二次大手术，健康状况不好，目前病休在家。',
      status:'待救助',
      address:'江海二居'
    },{
      index:98,
      name:'政策补助、志愿者服务、定期访视',
      remark:'父母离异，父亲因为特殊原因无法找到稳定的工作，爷爷多年瘫痪在床刚去世，奶奶也是镇保退休',
      status:'待救助',
      address:'江海二居'
    },{
      index:99,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'患有肺部肿瘤和左肾输尿管肿瘤，先后于胸科医院和中山医院开刀治疗，已花费巨额医疗费用',
      status:'待救助',
      address:'江海三居'
    },{
      index:100,
      name:'政策补助、医疗咨询、志愿者服务',
      remark:'心脏多次手术，装有支架，医疗费用巨大，妻子患有肝癌，生活困难。',
      status:'待救助',
      address:'江海三居'
    },{
      index:101,
      name:'政策补助、定期访视',
      remark:'肢体重残，前年心脏支架，去年患上脑梗，长期服药，医疗费用支出大，家庭困难',
      status:'待救助',
      address:'光明村'
    },{
      index:102,
      name:'政策补助、定期访视',
      remark:'家庭为一户三残家庭，汤友才为肢体四级，妻子蒋吉英为智力三级，女儿汤笑燕为智力三级',
      status:'待救助',
      address:'光明村'
    }]
  },

  // 申请
  apply: function() {
    wx.navigateToMiniProgram({
      appId: 'wx34b0738d0eef5f78',
      path: 'pages/forms/publish?token=LAlaNV',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  // 发布
  publish: function() {
    wx.navigateToMiniProgram({
      appId: 'wx34b0738d0eef5f78',
      path: 'pages/forms/publish?token=rFNhDP',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  // 获取地址位置信息
  addressClick(e) {
    const that = this;
    // 获取当前位置的经纬度
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        debugger
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          // 在地图上显示当前位置
          success (res) {
            // 在地图上选择位置显示
            wx.chooseLocation({
              success (res) {
                // console.log(e.currentTarget.dataset['address'])
                debugger
                console.log(res);
                const { address } = res;
                that.setData({
                  address
                })
                console.log(that.data.address)
                that.getinfo();
              },fail(res){
                console.log(res);
              }
            })
          },fail(){
            console.log(res)
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})