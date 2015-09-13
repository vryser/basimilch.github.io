jQuery( function() { ( function( $$, $, undefined ) {

  $(".next-event-alert[data-event-end-date]").each(function(){
    var $this     = $(this),
        eventDate = new Date($this.data("event-end-date")),
        now       = new Date();
    if ( now > eventDate ) {
      $this.remove();
    }
  });

  /* Make all non-local links open in new tab */
  $("a[href^=http]").attr("target", "_blank");

  /* Add download attr to /download links */
  $("a[href^='/downloads/']")
    .attr("target", "_blank")
    .attr("download", "");

  /* Add direct links on hover over section titles */
  function addDirectLink($elem, targetId) {
    if ( $elem.data("section-title-link-already-added") ) {
      $elem.find(".section-title-link").toggleClass("hidden");
    } else {
      var faqLinkHTML = "<a class='section-title-link' href='#" + targetId + "'>[link]</span></a>";
      $elem.append(faqLinkHTML);
      $elem.data("section-title-link-already-added", true);
    }
  }
  $("h1[id],h2[id],h3[id],h4[id]").hover(
    function(){
      var $this = $(this);
      addDirectLink($this, $this.attr("id"));
    });
  $(".event-item[id]").hover(
    function(){
      var $this = $(this),
          $elem = $this.find(".event-title");
      addDirectLink($elem, $this.attr("id"));
    });

  var topThreshold = 325,
      topLinkShown = false,
      $topLink     = $(".top-link");
  $(window).scroll(function(){
    if ( this.scrollY > topThreshold && ! topLinkShown ) {
      topLinkShown = true;
      $topLink.stop().fadeIn("fast");
    } else if ( this.scrollY < topThreshold && topLinkShown ) {
      topLinkShown = false;
      $topLink.stop().fadeOut("fast");
    }
  });
  function removeHash () {
    if ( window.location.hash ) {
      history.pushState("",
                        document.title,
                        window.location.pathname + window.location.search);
    }
  }
  $topLink.click(function(){
    var topElemPosition = $("#inhalt").parent().find("h1:first-of-type").position() ||
                          $("#markdown-toc").position(),
        scrollTopPosition = topElemPosition ? topElemPosition.top : 0,
        scrollTopPosition = (window.scrollY > scrollTopPosition) ? scrollTopPosition : 0;
    $("html,body").animate({scrollTop : scrollTopPosition},"fast");
    removeHash();
    return false;
  });

  $("#floating-nav-menu, .navbar-toggle").click(function(){
    window.scrollTo(0,0);
    $("body").toggleClass("modal-open");
    $("#floating-nav-menu").fadeToggle('fast');
    $("#floating-nav-menu nav").slideToggle();
  });

  $(window).on('hashchange', highlightSectionInURLHash);
  function highlightSectionInURLHash(){
    $(".elem-id-in-url-hash").removeClass("elem-id-in-url-hash");
    $(window.location.hash).addClass("elem-id-in-url-hash");
  }
  highlightSectionInURLHash(); // Do it also on page load.

}( window.basimilch = window.basimilch || {}, jQuery ));});