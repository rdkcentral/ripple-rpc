---
title: Entertainment

version: next
layout: default
sdk: ripple
---

# Entertainment

---

Version Entertainment 0.0.0-unknown.0

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Types](#types)
  - [ProgramType](#programtype)
  - [MusicType](#musictype)

## Overview

undefined

## Types

### ProgramType

In the case of a program `entityType`, specifies the program type.

```typescript
ProgramType: {
    MOVIE: 'movie',
    EPISODE: 'episode',
    SEASON: 'season',
    SERIES: 'series',
    OTHER: 'other',
    PREVIEW: 'preview',
    EXTRA: 'extra',
    CONCERT: 'concert',
    SPORTING_EVENT: 'sportingEvent',
    ADVERTISEMENT: 'advertisement',
    MUSIC_VIDEO: 'musicVideo',
    MINISODE: 'minisode',
},

```

---

### MusicType

In the case of a music `entityType`, specifies the type of music entity.

```typescript
MusicType: {
    SONG: 'song',
    ALBUM: 'album',
},

```

---
