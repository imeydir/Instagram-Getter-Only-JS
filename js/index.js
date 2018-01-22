function Getir() {
var kullanici_adi = $("#kullanici_adi").val();
$.get( "https://www.instagram.com/" + kullanici_adi + "/?__a=1", function( veri ) {
adsoyad = veri.user.full_name;
kullaniciadi = veri.user.username;
id = veri.user.id;
fotograf = veri.user.profile_pic_url_hd;
bio = veri.user.biography;
medya = veri.user.media.count;
takipci = veri.user.followed_by.count;
takip = veri.user.follows.count;
$("#sonuc").html("<img class='profile_picture' src='"+ fotograf +"'><br><b>Ad Soyad:</b> "+ adsoyad +"&nbsp;(@"+ kullaniciadi +")<br><b>ID:</b> "+ id +"<br><b>Biyografi:</b> " + bio +"<br><b>Paylaşım:</b> "+ medya +"&nbsp;&nbsp;<b>Takipçi:</b> "+ takipci +"&nbsp;&nbsp;<b>Takip:</b> "+ takip +"");
});
}

$("#kullanici_adi").keyup(function(event) {
               if (event.keyCode === 13) {
            $("#getir").click();
           }
         });