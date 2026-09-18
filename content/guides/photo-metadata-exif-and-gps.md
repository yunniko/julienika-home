# What your photos reveal: EXIF, GPS, and when to strip it

Every photo your phone or camera takes carries a block of data describing how
and where it was taken. Most of it is genuinely useful. Some of it is a
precise record of where you were standing at a particular moment, and it
travels with the file when you send it to someone.

## What is actually in the file

The dominant standard is **EXIF** (Exchangeable Image File Format), embedded in
JPEG and TIFF files and mirrored by similar structures in raw formats. Two
other standards sit alongside it: **XMP**, an extensible container that began
at Adobe but has been an ISO standard since 2012, and **IPTC**, the captions,
credits and rights fields used by news and stock photography. The two are not
really siblings — the current IPTC Photo Metadata Standard is implemented
*using* XMP, with the older IIM format as legacy. That matters if you ever
strip "the XMP": your copyright and credit fields are in there.

Typical EXIF contents fall into a few groups:

- **Capture settings** — shutter speed, aperture, ISO, focal length, whether
  the flash fired, white balance, metering mode.
- **Equipment** — camera make and model, lens, and often the firmware version.
  Many cameras also record a serial number.
- **Timestamps** — when the shutter fired, usually to the second, sometimes
  with a time zone offset.
- **Orientation** — how the image should be rotated for display, which is why a
  photo can appear correct in one program and sideways in another.
- **Location** — latitude, longitude, often altitude and a GPS timestamp, if
  location services were enabled.
- **Processing history** — some editors record software names and edit steps.

The capture settings are why photographers care about EXIF at all: it is how
you learn what you did when a shot worked. The location and identity fields are
the ones worth thinking about before sharing.

## Why location data deserves attention

GPS coordinates in a photo are typically accurate to within metres. A set of
photos taken at home, posted publicly over time, describes where you live and
when you are there — not by inference, but as coordinates in the file.

This matters most in cases people rarely think about in advance: selling
something online from your kitchen table, posting pictures of a child in a
garden, photographing a pet outside a house, or sharing images from a location
you would rather not have attached to your name. Camera serial numbers are a
quieter issue: they link separate photos to the same device, which is useful
for proving ownership of a stolen camera and equally useful for connecting
accounts you intended to keep separate.

## What actually happens when you upload

Behaviour varies by platform, and assuming any particular one is safe is
unwise.

Most large social networks strip or ignore EXIF when they re-encode uploads for
display — which they do primarily to save bandwidth, not to protect you. That
re-encode usually discards metadata as a side effect. But the same platform may
retain the original and the data in it on their servers, and stripping on
display does nothing for files shared another way.

The gaps are the problem, and some of them are specific enough to name.
**Photo-sharing and cloud services generally preserve metadata rather than
strip it** — Flickr will even display a photo's EXIF, including its location,
as a feature, and services such as Google Photos, iCloud and Dropbox keep the
original intact, shared links included. Email attachments preserve everything.

The subtlest trap is in messaging apps: several strip metadata when you send a
picture as a **photo**, and preserve it when you send the same file as a
**document** or **file** — which is exactly what people do when they want to
avoid the app's compression. Sending "original quality" has the same effect.
Forums and classified-ads sites that store uploads as-is keep everything too,
as does handing someone a file on a USB stick.

One format note: HEIC, the default on recent iPhones, carries the same EXIF and
GPS as JPEG. Browser-based tools cannot always decode it, so a cleaner that
works on your JPEGs may simply refuse the photos straight off your phone.

If it matters, the safe assumption is that metadata survives unless you
removed it yourself.

## How metadata gets removed

There are three broad approaches, with different trade-offs.

**Dedicated metadata tools** edit the metadata block directly, leaving the
image data untouched. This is the cleanest result — no quality loss whatsoever
— and lets you remove selected fields while keeping others, such as dropping
GPS but keeping exposure settings. Be aware of two things a half-hearted strip
can leave behind: manufacturer **MakerNote** blocks, which are proprietary and
often survive a partial clean, and the **embedded thumbnail**, which carries its
own copy of the metadata and, notoriously, sometimes a pre-crop version of the
picture. People have published "cropped" images whose thumbnail still showed
what they had cropped out. A thorough tool removes both; a selective one may
not.

**Re-encoding the image** — opening it and saving a copy, or running it through
a canvas-based browser tool — produces a new file from the pixels, and the
metadata simply does not come along. It is effective and requires no special
software, but it has two costs. It re-compresses a JPEG, losing a little quality
each time — usually irrelevant for sharing on the web. Less obviously, a browser
canvas also discards the image's **colour profile**. A photo in a wide-gamut
space, which includes pictures from most recent phones, can then be interpreted
as plain sRGB and come out visibly flatter and less saturated, and browsers
differ in how carefully they handle this. If colour fidelity matters for the
image, strip it with a metadata editor instead.

**Operating system features** exist on both major desktop platforms: Windows
offers a "Remove Properties and Personal Information" option in a file's
properties dialog, and macOS and iOS provide location-stripping options when
sharing. These are convenient, but do not rely on them for privacy. Windows'
option is documented as leaving XMP blocks, IPTC blocks, manufacturer
MakerNotes and the embedded thumbnail's own metadata untouched — it cleans the
fields the Explorer properties panel knows about, which is not the same as
cleaning the file. Behaviour also varies by version.

Whichever you use, **check the result** rather than trusting the tool — and
check it with something that reads the whole file. The Windows properties panel
is the wrong instrument here, because it shows only the same curated subset it
removes: a file can look clean there while still carrying XMP, MakerNotes and a
thumbnail. A dedicated inspector, such as ExifTool on the command line or any
viewer that lists every tag, tells you the truth.

Expect a few fields to survive a deliberate partial strip. Orientation and
colour-profile data are often kept on purpose, because removing them changes
how the picture displays rather than who it identifies.

## When not to strip it

Metadata is not an enemy. There are good reasons to keep it:

- **Learning from your own photographs** requires the settings.
- **Copyright and credit** live in IPTC fields, and stripping them from work
  you are publishing removes your own authorship claim.
- **Archives and cataloguing** depend on timestamps and camera data to sort and
  search decades of files.
- **Evidence and documentation** — insurance claims, condition reports,
  surveying — often relies on intact timestamps and coordinates.

The reasonable habit is not "always strip", but "strip when publishing, keep
the original intact". Work from a copy, and treat your archive as the master.

## A note on turning location off entirely

If you never want coordinates recorded, both major mobile platforms let you
deny location access to the camera app specifically. This is more reliable than
remembering to strip afterwards, and costs you only the ability to browse
photos by map. Many photographers do the opposite deliberately — travel and
landscape work benefits enormously from geotagging — which is exactly why the
setting exists rather than a default.

## Looking at your own files

The [photo metadata cleaner](https://photo-metadata-cleaner.svc.julienika.cz)
on this site shows what EXIF and GPS data a photo contains and removes it via a
canvas re-encode, entirely inside your browser — the file is never uploaded
anywhere.

Whatever tool you use, the useful first step is simply to look. Most people are
surprised by how much is in there.
