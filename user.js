const posts = [{ title: 'POST1' }];
let lastActivityTime = null;

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

console.log('After breakup, the user logs into Facebook.');

createPost({ title: 'POST2' })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log('All posts created:');
        posts.forEach((post) => {
            console.log(post.title);
        });
        console.log('Last activity time:', lastActivityTime);
        return deletePost();
    })
    .then(() => {
        console.log('After deleting the last post, the updated posts are:');
        posts.forEach((post) => {
            console.log(post.title);
        });
    })
    .catch((error) => {
        console.log(error);
    });