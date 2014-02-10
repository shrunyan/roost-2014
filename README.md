# Roostagram

## App Requirements

- share photos
	- take a picture (webcam)
	- upload photo file
- photo filters
- delete photos
- photo gallery view
- single photo view


## Engineering Requirements

- performant
	- repaints & reflows
	- big O notation to determine algorithm complexity
- fault tolerance
	- gracefully handle thrown errors
	- unhandled errors should be reported back to server
- security
	- prevent injection attacks
- development workflow
	- formalized testing process
	- version control
	- formalized build process
- documentation
	- modules (what things are)
	- source (how things work)
	- process (how things got this way)


## Technical Requirements
1. View single photo
2. View GAllery
3. Upload photo file
4. Image filtering/processing
5. Upload from webcam 
6. Delete photo


## Notes

https://gist.github.com/bobholt/8922767
http://tinyurl.com/roost-app-1a

### Grunt
Running static webserver from grunt to dev
Break grunt tasks into seperate files which are loaded into the Gruntfile.js
You can run arbitrary javascript in grunt `registerTasks`


## Backbone

The model in MVC is described by `model` and `collection` in backbone
`parse` methods allow you to parse data given to a model before it's instantiated.


# questions
if your setting a default property in your initialize shouldn't you just set it as a default proptery





