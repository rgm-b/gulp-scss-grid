var gulp = require('gulp');  //подключение модуля из node modules

/*gulp.task('nameTask', function(){  //task - задача     nameTask название таска
	//!!! в командной строке gulp nameTask, если указать default вместо nameTask, то в командной строке просто gulp
	console.log('Привет, я таск')
});
*/

/*gulp.task('mytaskDesc', function(){  //task - задача     mytaskDesc название таска
  return gulp.src('путь/к/файлу/файл.расширение')  //gulp.src одна из базовых команд Галпа, которая для обработки берёт какие-либо файлы
	               //которые попадают в данную выборку. можно напрямую указать файл или воспользоваться шаблоном Глоб
	         .pipe( plugin() )  //вызов команды или плагина, plugin это произвольная функция, которую выполняем в pipe (выполняем по цепочке после src)
	         					//т.е. взяли файл source-files, выполнили действие над ним plugin()
	         .pipe( gulp.dest('folder') ) //dest (destination - место назначения) выгружаем результат в папку, напр. folder
	         //это вся задача галпа (взять файл, совершить над ним действие, выгрузить изменённый файл)
});*/


var sass = require('gulp-sass');  //подключаем пакет gulp-sass (установка npm i gulp-sass --save-dev )

gulp.task('scssConverter', function(){  //в консоли gulp sass , чтобы выполнить такс по ИМЕНИ которое указали тут (в данном случаем имя sass)
	return gulp.src('./app/scss/**/*.scss') // взять все ФАЙЛЫ с расширением .scss (** в любой вложенности)
		        //.pipe(sass())	// конвертировать, функция require('gulp-sass')()
				.pipe(sass().on('error', sass.logError) )	// конвертировать или вывести ошибку конвертации в командной строке
				.pipe(gulp.dest('./app/css'));  // положить результат в ПАПКУ css ,	 dest - функция(метод) Галпа
})

//Чтобы вручную не запускать в командной строке gulp scssConverter запускаем задачу gulp scssConverter:watch
//при каждом сохранении файлов scss автоматически изменения добавляются в css файл
gulp.task('scssConverter:watch', function(){
	gulp.watch('./app/scss/**/*.scss', gulp.series('scssConverter')); //watch - смотреть, наблюдение
})