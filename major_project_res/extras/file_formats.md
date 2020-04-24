### Image File:

#### 1. PNG

Basic Definition: 

PNG or Portable Network Graphics files are a lossless image format originally designed to improve upon and replace the gif format. PNG files are able to handle up to 16 million colors, unlike the 256 colors supported by GIF. A raster image format standardized by ISO/IEC. 

**Compression:** Lossless - compression without loss of quality
**Best For:** Web Images
**Special Attributes:** Save Transparency

**Open format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `image/png`

Conversion: .png -> .jpg / .webp

Conversion: lossy

encoding: UTF-8

Algorithm:

```
 * 1-> Converting image to base64.
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> set with window.innerHieght and width, so that according to image size.
 * 5-> read the canvas image and change image signature to respective file type.
 * 6-> convert canvas to image by toDataUrl() function in js.
```



------

#### 2. JPG

Basic Definition: 

JPEG, which stands for Joint Photographic Experts Groups is a “lossy” format meaning that the image is compressed to make a smaller file. The compression does create a loss in quality but this loss is generally not noticeable. JPEG files are very common on the Internet and JPEG is a popular format for digital cameras - making it ideal for web use and non-professional prints. An image format standardized by ISO/IEC

**Compression:** Lossy - some file information is compressed or lost
**Best For:** Web Images, Non-Professional Printing, E-Mail, Powerpoint
**Special Attributes:** Can choose amount of compression when saving in image editing programs like Adobe Photoshop or GIMP.

**Open format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `image/jpeg`

Conversion: .jpg -> .png / .webp

Conversion: lossy

encoding: UTF-8

Algorithm:

```
 * 1-> Converting image to base64.
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> set with window.innerHieght and width, so that according to image size.
 * 5-> read the canvas image and change image signature to respective file type.
 * 6-> convert canvas to image by toDataUrl() function in js.
```



------

#### 3. GIF

Basic Definition: 

GIF or Graphics Interchange Format files are widely used for web graphics, because they are limited to only 256 colors, can allow for transparency, and can be animated. GIF files are typically small is size and are very portable. 

**Compression:** Lossless - compression without loss of quality
**Best For:** Web Images
**Special Attributes:** Can be Animated, Can Save Transparency

**Formerly proprietary  now Open format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `image/gif`

Conversion:  .gif -> .jpg / .png / .webp

Conversion: lossy

encoding: UTF-8

Algorithm:

```
 * 1-> Converting image to base64.
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> set with window.innerHieght and width, so that according to image size.
 * 5-> read the canvas image and change image signature to respective file type.
 * 6-> convert canvas to image by toDataUrl() function in js.
```



------

#### 4. WEBP

Basic Definition: 

A WEBP file is an image saved in the WebP (pronounced "Weppy") raster image format developed by Google for web graphics. The WebP format reduces file size more than standard JPEG compression while maintaining similar or better image quality.

**Compression:** supports both lossy and lossless compression
**Best For:** Web Images (not supported by safari, Internet Explorer)
**Special Attributes:** includes an alpha channel for transparency. Several graphics editors can open and save WebP files, such as Adobe Photoshop, Gimp, Image Magick, and IrfanView.

**License**:  developed by [Google](https://en.wikipedia.org/wiki/Google), based on technology acquired with the purchase of [On2 Technologies]

Conversion: .webp -> .jpg / .png

[MIME](https://en.wikipedia.org/wiki/MIME) media type `image/webp`

Conversion: lossy

encoding: UTF-8

Algorithm:

```
 * 1-> Converting image to base64.
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> set with window.innerHieght and width, so that according to image size.
 * 5-> read the canvas image and change image signature to respective file type.
 * 6-> convert canvas to image by toDataUrl() function in js.
```



#### 5. SVG

Basic Definition: 

An SVG file is a graphics file that uses a two-dimensional [vector graphic](https://techterms.com/definition/vectorgraphic) format created by the World Wide Web Consortium (W3C). It describes images using a text format that is based on [XML](https://techterms.com/definition/xml). SVG files are developed as a standard format for displaying vector graphics on the web.

**Compression:** supports both lossy and lossless compression
**Best For:** Web pages
**Special Attributes:** SVG images can be created and exported from Adobe Creative Suite programs, such as Illustrator and GoLive.

**License**:  open standard by w3c   i.e **Open Format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `image/svg+xml`

Conversion: .svg -> .jpg / .png / .webp

Conversion: lossy

encoding: UTF-8,XML

Algorithm:

```
 * 1-> Converting image to base64.
 * 2-> pass base64 to function.
 * 3-> create canvas with that base64 data uri.
 * 4-> set with window.innerHieght and width, so that according to image size.
 * 5-> read the canvas image and change image signature to respective file type.
 * 6-> convert canvas to image by toDataUrl() function in js.
```



------

### Documents File :

1. #### DOCX

Basic Definition: 

A DOCX file is a document created by Microsoft Word or another [word processing](https://techterms.com/definition/wordprocessor) program, such as OpenOffice Writer or Apple Pages. It contains formatted text but may also include images, drawn objects, and other document elements. DOCX files are widely used in home, academic, and business environments for drafting letters, resumes, invitations, newsletters, and other documents.

Unlike [.DOC](https://fileinfo.com/extension/doc) files, which store document data in a single binary file, DOCX files are created using the Open XML format, which stores documents as a collection of separate files and folders in a compressed [zip](https://techterms.com/definition/zip) package. Within a DOCX file are [XML](https://techterms.com/definition/xml) files and three folders, docProps, Word, and _rels, which hold the document properties, content, and relationships between the files. 

**NOTE:** To explore the contents of a DOCX file manually, rename the ".docx" extension to ".zip" and then decompress the resulting file with any zip decompression utility.

**Compression:** lossless

**License to Microsoft**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

Conversion: .docx -> .pdf

> Algorithm still need to created

Used  by Application: Word 2007 or later, LibreOffice

| Developer | Microsoft (License)                               |
| --------- | ------------------------------------------------- |
| Category  | [Text Files](https://fileinfo.com/filetypes/text) |
| Format    | [Zip](https://fileinfo.com/extension/docx)        |

#### 2. PDF

Basic Definition:

A PDF file is a multi-platform document created by Adobe Acrobat or another PDF application. The PDF format is commonly used for saving documents and publications in a standard format that can be viewed on multiple platforms. The files may contain text, images, forms, annotations, outlines, and other document-related data. The PDF files also preserve fonts and formatting electronically across multiple platforms and appear the same on the screen as when printed on paper.

Used  by Application: Adobe Reader, LibreOffice, Apple Pages, and web browsers, such as Google Chrome and Microsoft Edge.

[MIME](https://en.wikipedia.org/wiki/MIME) media type `application/pdf`

Conversion: .pdf -> .docx

> Algorithm still need to created

### Formerly proprietary but now free open source

| Developer | Adobe Systems                                                |
| --------- | ------------------------------------------------------------ |
| Category  | [Page Layout Files](https://fileinfo.com/filetypes/page_layout) |
| Format    | Binary                                                       |

#### 3. TXT

Basic definition :

A TXT file is a standard text document that contains unformatted text. It is recognized by any text editing or word processing program and can also be processed by most other software programs. TXT files are often created and opened using Microsoft Notepad and Apple TextEdit.

**Open Format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `text/plain`

Conversion: .txt -> .pdf

Algorithm :

```
* 1-> Read txt file as plain text.
* 2-> According to length of text content, decide the number of pages.
* 3-> Then by using Open Source library jsPDF() passing arguments as text data.
* 4-> jsPDF() return a BLOB data, save it as pdf.
```

Encoding : UTF-8/ASCII

Used By Application : Web browser, text editors

#### 4. HTML

Basic definition :

An HTML file is a web page coded in [HTML](https://techterms.com/definition/html) that can be displayed in a web browser. It is used to format text, tables, images, and other content that is displayed on a web page. HTML files are widely used on the web as most pages within [static websites](https://techterms.com/definition/staticwebsite) have an ".html" extension.

HTML source code is parsed by a web browser and is typically not seen by the user.

**Open Format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `text/html`

Encoding : UTF-8

Used By Application : Web browser, text editors

Algorithm : 

```
* 1-> Read html file as plain text.
* 2-> According to length of html content, decide the number of pages.
* 3-> Then by using Open Source library jsPDF() passing arguments as text data.
* 4-> jsPDF() return a BLOB data, save it as pdf.
```

#### 5. MD

Basic definition :

An MD file is a text file created using one of several possible dialects of the Markdown language. It is saved in plain text format but includes in-line text symbols that define how to format the text (e.g., bold, indentations, headers, table formatting). MD files are designed for authoring plain text documentation that can be easily converted to [HTML](https://techterms.com/definition/html).

Projects created with GitHub, a popular on-line version control system, often use a file named **README.md**, which contains the [readme](https://techterms.com/definition/readme) for the project.

John Gruber, the developer of Markdown, has created a [Perl](https://techterms.com/definition/perl) program for converting Markdown to HTML. The program, called "Markdown," is available at the Daring Fireball website.

**NOTE:** Markdown files also used the [.MARKDOWN](https://fileinfo.com/extension/markdown) extension.

**Open  Format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `text/markdown`

Used By Application : Github , Software Documentation , text editors

conversion: .md -> .pdf / .html

> Algorithm still need to created

#### 6. PPT

Basic definition :

A PPT file is an editable slide show created by Microsoft PowerPoint or another presentation program, such as OpenOffice Impress or Apple Keynote. It may include formatted text, bullet points, images, movies, sound effects, and music. The PPT file was introduced in 1987 with the release of PowerPoint.

**Presentation1.ppt** - The default filename Microsoft PowerPoint gives to new presentations prior to PowerPoint 2007, which now uses Presentation1.pptx.

Used By Application : MS OFFICE, LIBRE OFFICE

**Proprietary  to Microsoft**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `application/vnd.ms-powerpoint`

conversion : .ppt -> .pdf

> Algorithm still need to created

#### 7. EPUB

Basic definition :

An EPUB file is a digital ebook saved in the EPUB format, an open XML-based format for digital books and publications. It provides a standard digital publication format for publishers and consumers. EPUB files can be viewed with supporting software programs and hardware devices, such as the Sony Reader and Barnes & Noble Nook. The EPUB format is based on three open standards, which are all maintained by the International Digital Publishing Forum (IDPF).

1. The Open Publication Structure (OPS), which defines the content markup
2. The Open Packaging Format (OPF), which describes the ebook structure
3. The Open Container Format (OCF), which packages all the ebook files together in a compressed format

**NOTE:** Many commercial ebooks include digital rights management ([DRM](https://techterms.com/definition/drm)) protection. These files can only be opened on devices that have been authorized to view the ebook.

**Open Source Format**

[MIME](https://en.wikipedia.org/wiki/MIME) media type `application/epub+zip`

conversion : .epub -> .pdf

> Algorithm still need to created

------

### Audio File :  

> similar off-line website  https://js-audio-converter.com/ for audio converter 

#### 1. MP3

Basic definition :

An MP3 file is an audio file saved in a compressed audio format developed by the Moving Picture Experts Group (MPEG) that uses "Layer 3" audio compression. It is commonly used to store music and audiobooks with near-CD quality sound (stereo, 16-bit) and roughly 1/10 the size of a [.WAV](https://fileinfo.com/extension/wav) or [.AIF](https://fileinfo.com/extension/aif) file. The quality of an MP3 file depends largely on the [bit rate](https://techterms.com/definition/bitrate) used for compression. Common bit rates are 128, 160, 192, and 256 kbps. Higher bit rates result in higher quality files that also require more disk space.

Device support: Apple iPod and Sony Walkman devices, various portable music devices

**Open Format**

Compression: lossy

[MIME](https://en.wikipedia.org/wiki/MIME) media type `audio/mpeg`

Encoding: MPEG-1

conversion : .mp3 -> .wav

> Algorithm still need to created

#### 2. WAV

Basic definition :

A WAV file is an audio file saved in the WAVE format , which is a standard digital audio file format utilized for storing waveform data. WAV files may contain audio recordings with different sampling rates and bit rates but are often saved in a 44.1 KHz, 16-bit, stereo format, which is the standard format used for CD audio. The WAVE format is based on the Resource Interchange File Format (RIFF), which is a file container format primarily used for saving video and sound. Microsoft and IBM jointly developed the WAVE format in the early-1990s adopting WAV files as the primary option for saving raw, uncompressed audio in Microsoft Windows.

Encoding: RIFF

**Proprietary** format from Microsoft and IBM

[MIME](https://en.wikipedia.org/wiki/MIME) media type `audio/wav`

Compression : lossless

conversion: .wav -> .mp3

------

### Compressed File : 

> Some reference for conversion 
>
> https://github.com/pkalogiros/LZFjs
>
> https://github.com/pierrec/node-lz4 
>
> https://stuk.github.io/jszip/



#### 1. ZIP

Basic definition : 

The Zip format was created in 1989 by Phil Katz and was used in the PKZIP utility developed by PKWARE, Inc. The format grew in popularity and is now supported by most file compression/decompression programs.It stores files separately from each other allowing the files to be compressed using different methods and extracted without compressing or decompressing the entire archive.

Programs to open ZIP: Winrar, 7zip, Microsoft file explorer, etc

 [MIME](https://en.wikipedia.org/wiki/MIME) media type `application/zip`

**Open Format**

conversion : .zip -> tar.gz/rar

compression : lossless

> Algorithm still need to created

#### 2. TAR.GZ

Basic definition : 

A TAR.GZ file is a TAR archive compressed with the standard GNU zip (gzip) compression algorithm. It contains one or more compressed files and is commonly used on Unix operating systems to package files, programs, and installers.

**NOTE:** TAR.GZ files must first be decompressed and then expanded using a TAR utility. They include both [.TAR](https://fileinfo.com/extension/tar) and [.GZ](https://fileinfo.com/extension/gz) file types.

Programs to open tar.gz : winrar, 7zip, Ark ,etc

**Open Format** 

 [MIME](https://en.wikipedia.org/wiki/MIME) media type `application/gzip` 

conversion: .tar.gz -> zip/rar

> Algorithm still need to created

#### 3. RAR

Basic definition :

A RAR file is an archive that contains one or more files compressed with RAR compression. It uses a higher compression ratio than typical ZIP compression and incorporates a proprietary compression algorithm. The RAR compressor can also create spanned, or multi-volume, archives, which are split across several compressed files. These files typically have file extensions from ".R00" to ".R99," or they may all have the standard ".RAR" extension.

**NOTE:** The name "RAR" stands for "Roshal ARchive," which was named after Eugene Roshal, the RAR compression algorithm developer.

Programs to open rar : winrar, 7zip, unrar ,etc

**Proprietary to  *win.rar GmbH***

[MIME](https://en.wikipedia.org/wiki/MIME) media type `application/vnd.rar`

conversion: .rar -> zip

> Algorithm still need to created