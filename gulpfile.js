var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var imagemin = require('gulp-imagemin')
gulp.task('server',function(){
    connect.server({
        root:'dest',  //以谁为服务器根目录
        port:8888,  // 端口号
        livereload:true
    });
});

/*gulp.task('hello',function(){
	console.log('你好啊');
});

gulp.task('default',function(){
	console.log('你好啊');
})

*/
gulp.task('index',function(){
	//文件的复制
	return gulp.src("index.html").pipe(gulp.dest("dest")).pipe(connect.reload());
})

gulp.task('images',function(){
	//图片的复制
	return gulp.src("images/*.jpg").pipe(imagemin()).pipe(gulp.dest("dest/images"))
})

gulp.task('data',function(){
    return gulp.src(["json/*.json","xml/*.xml","!json/mimi.json"]).pipe(gulp.dest('dest/data'));

});

gulp.task('all',['index','images','data','less'],function(){
    console.log('你好');
});


gulp.task('less',function(){
	return gulp.src('style.less').pipe(less()).pipe(gulp.dest("dest/style"))
})

gulp.task('watch',function(){
    gulp.watch('index.html',['all']);
    gulp.watch('images/**/*',['images']);
    gulp.watch('style.less',['less'])
});

gulp.task('script',function () {
    return gulp
        .src(['scripts/one.js','scripts/two.js'])
        .pipe(concat('three.js'))
        .pipe(gulp.dest('dest/script'))
        .pipe(rename('three.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dest/script'))
})

gulp.task('default',['server','watch']);


