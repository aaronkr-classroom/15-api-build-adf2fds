// public/js/modal.js
"use strict";

/**
 * Listing 26.6 (p. 388)
 */
$(document).ready(() => {
    $("#modal-button").click(() => {
        $(".modal-body").html(""); // 모든 내용은 다 지워요
        
        $.get("/courses?format=json", (data) => {
            data.forEach(courses => {
                $(".modal-body").append(
                `<div>
                    <span class="course-title">${course.title}</h5>
                    <p class="course-description">${course.description}</p>
                    <p><a href="/courses/${course._id}">View Course</a></p>
                    <button class="btn-info" data-ud="${course._id}">Join</button>
                    </div>`
                );

            });
        });
    });
});
