## Praat script by Kevin Ryan 9/05
## Creates multiple variable sine-wave objects and/or files
## Below: User enters directory (the default below is the path for my own desktop; 
## you will probably want to change that), the number of files to create, the 
## duration of each sound file, the gain of each, whether they should be kept as
## objects in the object list, whether they should be saved as files, and the
## sine formula (k or a random variable can be used to ensure each wave is unique)


form Create multiple sine wave sound files (.wav)
   sentence Directory C:\Documents and Settings\Kevin\Desktop\
   comment The variable k below refers to the number of the file being created
   sentence Formula sin((100-k)*pi*(k+5)*tan(cos(x+k)))
   integer Number_of_files 5
   positive Duration_(s) 1
   positive Gain_(0-1) 0.2
   sentence Filename_base wave
   boolean Retain_created_sounds_in_object_list 1
   boolean Save_created_sounds_to_files 1
endform

## Now, loop through and create a sound for each file,
## saving it to a file and/or retaining it in the objects list
## as indicated in the form above

for k from 1 to number_of_files
   Create Sound... 'filename_base$''k' 0 duration 10000 'gain'*'formula$'
   if save_created_sounds_to_files
      Write to WAV file... 'directory$''filename_base$''k'.wav
   endif
   if not retain_created_sounds_in_object_list
      Remove
   endif
endfor
