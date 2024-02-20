(function() {var type_impls = {
"awc":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Future-for-ResponseBody%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/awc/responses/response_body.rs.html#82-106\">source</a><a href=\"#impl-Future-for-ResponseBody%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"awc/struct.ResponseBody.html\" title=\"struct awc::ResponseBody\">ResponseBody</a>&lt;S&gt;<div class=\"where\">where\n    S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"awc/error/enum.PayloadError.html\" title=\"enum awc::error::PayloadError\">PayloadError</a>&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"awc/error/enum.PayloadError.html\" title=\"enum awc::error::PayloadError\">PayloadError</a>&gt;</h4></section></summary><div class='docblock'>The type of value produced on completion.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/awc/responses/response_body.rs.html#88-105\">source</a><a href=\"#method.poll\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#tymethod.poll\" class=\"fn\">poll</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut Self</a>&gt;, cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#associatedtype.Output\" title=\"type core::future::future::Future::Output\">Output</a>&gt;</h4></section></summary><div class='docblock'>Attempt to resolve the future to a final value, registering\nthe current task for wakeup if the value is not yet available. <a href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#tymethod.poll\">Read more</a></div></details></div></details>","Future","awc::responses::response_body::MessageBody"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponseBody%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/awc/responses/response_body.rs.html#35-80\">source</a><a href=\"#impl-ResponseBody%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"awc/struct.ResponseBody.html\" title=\"struct awc::ResponseBody\">ResponseBody</a>&lt;S&gt;<div class=\"where\">where\n    S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"awc/error/enum.PayloadError.html\" title=\"enum awc::error::PayloadError\">PayloadError</a>&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/awc/responses/response_body.rs.html#40-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"awc/struct.ResponseBody.html#tymethod.new\" class=\"fn\">new</a>(res: &amp;mut <a class=\"struct\" href=\"awc/struct.ClientResponse.html\" title=\"struct awc::ClientResponse\">ClientResponse</a>&lt;S&gt;) -&gt; <a class=\"struct\" href=\"awc/struct.ResponseBody.html\" title=\"struct awc::ResponseBody\">ResponseBody</a>&lt;S&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"ResponseBody&lt;S&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Creates a body stream reader from a response by taking its payload.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.limit\" class=\"method\"><a class=\"src rightside\" href=\"src/awc/responses/response_body.rs.html#64-70\">source</a><h4 class=\"code-header\">pub fn <a href=\"awc/struct.ResponseBody.html#tymethod.limit\" class=\"fn\">limit</a>(self, limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Change max size limit of payload.</p>\n<p>The default limit is 2 MiB.</p>\n</div></details></div></details>",0,"awc::responses::response_body::MessageBody"],["<section id=\"impl-Unpin-for-ResponseBody%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/awc/responses/response_body.rs.html#16-30\">source</a><a href=\"#impl-Unpin-for-ResponseBody%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'__pin, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"awc/struct.ResponseBody.html\" title=\"struct awc::ResponseBody\">ResponseBody</a>&lt;S&gt;<div class=\"where\">where\n    __Origin&lt;'__pin, S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div></h3></section>","Unpin","awc::responses::response_body::MessageBody"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()