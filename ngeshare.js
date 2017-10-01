(function ( $ ) {
var deskripsi = $('title').text();
var core = {
    twitter     : "https://twitter.com/share?url="+window.location.href+"&text="+deskripsi,
    fb          : "https://www.facebook.com/sharer/sharer.php?u="+window.location.href,
    linkedin    : "https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href,
    pinterest   : "https://pinterest.com/pin/create/bookmarklet/?media=http%3A%2F%2Fgdurl.com%2Fa653&url="+window.location.href+"&description="+deskripsi,
    email       : "mailto:?subject="+deskripsi+"&body="+window.location.href
};


  $.fn.ngeshare = function(){
        this.append('<div class="ngeshare-shares"><a href="'+core.fb+'" target="_blank" class="ngeshare-btn ngeshare-fb">Facebook</a><a target="_blank" href="'+core.twitter+'" class="ngeshare-btn ngeshare-twitter">Twiiter</a><a target="_blank" href="'+core.pinterest+'" class="ngeshare-btn ngeshare-pin">Pinterest</a><a target="_blank" href="'+core.linkedin+'" class="ngeshare-btn ngeshare-linkedin">Linkedin</a><a target="_blank" href="'+core.email+'" class="ngeshare-btn ngeshare-email">Email</a></div>');

      return this;
  };


}( jQuery ));
