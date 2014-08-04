$(document).ready(function () {

    $('#add').click(function () {

        var father = $('.container');

        var newName = $('#newName').val();
        var newPhone = $('#newPhone').val();
        var newEmail = $('#newEmail').val();
        var newCategory = $('#newCategory').val();

        var newElement = $('<div class="contact-box"> <ul class="contact-info"> <li class="name">' + newName + '</li>' + '<li class="phone">' + newPhone + '<li class="mail">' + newEmail + '</li>' + '<li class="category">' + newCategory + '</li> </ul></div>');

        father.append(newElement);
    });
});
