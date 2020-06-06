import Posts from '/imports/db/posts/collection';
import {Meteor} from "meteor/meteor";

Meteor.publish('posts', function() {
    return Posts.find();
});