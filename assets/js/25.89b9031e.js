(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{437:function(v,_,t){"use strict";t.r(_);var e=t(13),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"tomcat-调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-调优"}},[v._v("#")]),v._v(" Tomcat 调优")]),v._v(" "),t("p",[v._v("有以下三个方面可以调优：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("内存优化")]),v._v(" "),t("p",[v._v("后续会有专门的章节讲解，因为 Tomcat 也是个 java 进程")])]),v._v(" "),t("li",[t("p",[v._v("线程优化")])]),v._v(" "),t("li",[t("p",[v._v("配置优化")])])]),v._v(" "),t("p",[v._v("这里着重讲解后面两个方面")]),v._v(" "),t("h2",{attrs:{id:"线程优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程优化"}},[v._v("#")]),v._v(" 线程优化")]),v._v(" "),t("p",[v._v("配置文档在："),t("code",[v._v("docs/config/http.html")]),v._v(" ，里面有很多的配置信息，我们这里关注的有：")]),v._v(" "),t("ul",[t("li",[v._v("maxConnections：最大连接数")]),v._v(" "),t("li",[v._v("acceptCount：相当于队列容量，当超出 maxConnections 时，把请求压入队列中")]),v._v(" "),t("li",[v._v("maxThreads：最大工作线程")]),v._v(" "),t("li",[v._v("minSpareThreads：最小空闲工作线程")])]),v._v(" "),t("h2",{attrs:{id:"配置优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置优化"}},[v._v("#")]),v._v(" 配置优化")]),v._v(" "),t("p",[t("code",[v._v("docs/config/host.html")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("autoDeploy：是否自动部署")]),v._v(" "),t("p",[v._v("它会开启额外的线程去定期检查部署 webapps 目录下是否有新的应用需要部署，然后处理它。建议关闭该功能")])])]),v._v(" "),t("p",[t("code",[v._v("docs/config/http.html")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("enableLookups：是否从 DNS 获取远程 IP")]),v._v(" "),t("p",[v._v("设置为 "),t("code",[v._v("true")]),v._v("，如果你想调用  "),t("code",[v._v("request.getRemoteHost()")]),v._v("，以便返回远程客户的实际主机名执行DNS查找。设置为 "),t("code",[v._v("false")]),v._v(" 跳过 DNS 查找并改为以字符串形式返回 IP 地址（从而提高性能）。默认情况下，DNS 查找被禁用。")])])]),v._v(" "),t("p",[t("code",[v._v("config/context.html")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("reloadable：监控应用程序的变化，重新载入")]),v._v(" "),t("p",[v._v("设置为"),t("code",[v._v("true")]),v._v("，如果你想卡塔利娜监测类 "),t("code",[v._v("/WEB-INF/classes/")]),v._v(" 和 "),t("code",[v._v("/WEB-INF/lib")]),v._v(" 更改，并自动如果检测到变化重新加载Web 应用程序。此功能在应用程序开发期间非常有用，但是它需要大量的运行时开销，因此不建议在已部署的生产应用程序上使用。这就是为什么此属性的默认设置为 "),t("em",[v._v("false 的原因")]),v._v(" 。但是，您可以使用 Manager Web 应用程序来触发按需重新加载已部署的应用程序。")])])]),v._v(" "),t("p",[t("code",[v._v("conf/server.xml")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("protocol：设置协议以处理传入流量。")]),v._v(" "),t("p",[v._v("默认值为 "),t("code",[v._v("HTTP/1.1")]),v._v(" 使用自动切换机制选择基于Java NIO 的连接器或基于 APR / native 的连接器。")]),v._v(" "),t("p",[v._v("文档路径："),t("code",[v._v("/docs/config/http.html")])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);