# What your photos reveal: EXIF, GPS, and when to strip it

Every photo your phone or camera takes carries a block of data describing how
and where it was taken. Most of it is genuinely useful. Some of it is a
precise record of where you were standing at a particular moment, and it
travels with the file when you send it to someone.

## What is actually in the file

The dominant standard is **EXIF** (Exchangeable Image File Format), embedded in
JPEG and TIFF files and mirrored by similar structures in raw formats. Two
other standards often sit alongside it: **IPTC**, used by news and stock
photography for captions, credits and rights, and **XMP**, Adobe's more modern
and extensible container.

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

The gaps are the problem. Sending a photo as an email attachment, through a
messaging app configured to send "original quality", via a file-sharing link,
or uploading to a forum or classified-ads site that stores files as-is, all
commonly preserve everything. So does handing someone a file on a USB stick, or
attaching it to a marketplace listing.

If it matters, the safe assumption is that metadata survives unless you
removed it yourself.

## How metadata gets removed

There are three broad approaches, with different trade-offs.

**Dedicated metadata tools** edit the metadata block directly, leaving the
image data untouched. This is the cleanest result — no quality loss whatsoever
— and lets you remove selected fields while keeping others, such as dropping
GPS but keeping exposure settings.

**Re-encoding the image** — opening it and saving a copy, or running it through
a canvas-based browser tool — produces a new file from the pixels, and the
metadata simply does not come along. It is effective and requires no special
software, but it re-compresses a JPEG, which loses a little quality each time.
For sharing on the web, that loss is usually irrelevant.

**Operating system features** exist on both major desktop platforms: Windows
offers a "Remove Properties and Personal Information" option in a file's
properties dialog, and macOS and iOS provide location-stripping options when
sharing. These are convenient but limited in what they remove, and they vary by
version.

Whichever you use, **check the result** rather than trusting the tool. Re-open
the stripped file and look at its properties. It is common for one field to
survive a partial strip, particularly orientation and colour-profile data,
which are often preserved deliberately because removing them breaks display.

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
