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

  // SOURCE: https://github.com/basimilch/basimilch-app/blob/788745286/app/assets/javascripts/init.coffee#L101-L117
  $('[data-href]').click( function(e){
      if ($(e.target).closest('a').length > 0) {
        // Let the a tag handle the link instead.
      } else if (e.metaKey) {
        window.open($(this).data('href'), '_blank');
      } else {
        document.location = $(this).data('href');
      }
  });

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

  /* global lightbox */
  lightbox.option({
    albumLabel: 'Bild %1 von %2'
  })
  
  // SOURCE: http://stackoverflow.com/a/5828342/5764181
  // SOURCE: https://github.com/slipstream/SlipStreamUI/blob/master/clj/resources/static_content/js/util.js#L1609-L1630
  function calculateRemainingScrollRatio($elem) {
      var totalHiddenHeight   = $elem[0].scrollHeight - $elem.outerHeight(),
          bottomHiddenHeight  = totalHiddenHeight - $elem.scrollTop();
      return bottomHiddenHeight / totalHiddenHeight;
  }
  var $footerHR       = $('footer > hr.flat'),
      $footerHRShadow = $('footer > hr.with-shadow'),
      $navMenu        = $('#right-hand-nav-menu');
  function adaptShadowWithScroll(e) {
      var $elem = $(e.currentTarget),
          remainingScrollRatio = calculateRemainingScrollRatio($elem),
          easyOutValue = Math.pow(remainingScrollRatio, 1/3); // the 3rd root is an empirical value
      $footerHR.css("opacity", 1 - easyOutValue);
      $footerHRShadow.css("opacity", easyOutValue);
  }
  $navMenu.scroll(adaptShadowWithScroll);
  $footerHRShadow.click(function(e){
    $navMenu.animate({
        scrollTop: $navMenu.scrollTop() + 50
    });
  });

}( window.basimilch = window.basimilch || {}, jQuery ));});