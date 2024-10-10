---
title: Entity

version: next
layout: default
sdk: ripple
---

# Entity

---

Version Entity 0.0.0-unknown.0

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Types](#types)
  - [ChannelEntity](#channelentity)
  - [MusicEntity](#musicentity)
  - [MovieEntity](#movieentity)
  - [UntypedEntity](#untypedentity)
  - [PlaylistEntity](#playlistentity)
  - [TVEpisodeEntity](#tvepisodeentity)
  - [AdditionalEntity](#additionalentity)
  - [TVSeasonEntity](#tvseasonentity)
  - [TVSeriesEntity](#tvseriesentity)
  - [PlayableEntity](#playableentity)
  - [ProgramEntity](#programentity)
  - [Entity](#entity)

## Overview

undefined

## Types

### ChannelEntity

```typescript
type ChannelEntity = {
  entityType: "channel";
  channelType: "streaming" | "overTheAir";
  entityId: string; // ID of the channel, in the target App's scope.
  appContentData?: string;
};
```

---

### MusicEntity

```typescript
type MusicEntity = {
  entityType: "music";
  musicType: MusicType; // In the case of a music `entityType`, specifies the type of music entity.
  entityId: string;
};
```

See also:

[MusicType](../Entertainment/schemas/#MusicType)

---

### MovieEntity

A Firebolt compliant representation of a Movie entity.

```typescript
type MovieEntity = {
  entityType: "program";
  programType: "movie";
  entityId: string;
  assetId?: string;
  appContentData?: string;
};
```

---

### UntypedEntity

```typescript
type UntypedEntity = {
  entityId: string;
  assetId?: string;
  appContentData?: string;
};
```

---

### PlaylistEntity

A Firebolt compliant representation of a Playlist entity.

```typescript
type PlaylistEntity = {
  entityType: "playlist";
  entityId: string;
  assetId?: string;
  appContentData?: string;
};
```

---

### TVEpisodeEntity

A Firebolt compliant representation of a TV Episode entity.

```typescript
type TVEpisodeEntity = {
  entityType: "program";
  programType: "episode";
  entityId: string;
  seriesId: string;
  seasonId: string;
  assetId?: string;
  appContentData?: string;
};
```

---

### AdditionalEntity

A Firebolt compliant representation of the remaining program entity types.

```typescript
type AdditionalEntity = {
  entityType: "program";
  programType:
    | "concert"
    | "sportingEvent"
    | "preview"
    | "other"
    | "advertisement"
    | "musicVideo"
    | "minisode"
    | "extra";
  entityId: string;
  assetId?: string;
  appContentData?: string;
};
```

---

### TVSeasonEntity

A Firebolt compliant representation of a TV Season entity.

```typescript
type TVSeasonEntity = {
  entityType: "program";
  programType: "season";
  entityId: string;
  seriesId: string;
  assetId?: string;
  appContentData?: string;
};
```

---

### TVSeriesEntity

A Firebolt compliant representation of a TV Series entity.

```typescript
type TVSeriesEntity = {
  entityType: "program";
  programType: "series";
  entityId: string;
  assetId?: string;
  appContentData?: string;
};
```

---

### PlayableEntity

```typescript
type PlayableEntity =
  | MovieEntity
  | TVEpisodeEntity
  | PlaylistEntity
  | MusicEntity
  | AdditionalEntity;
```

See also:

[MovieEntity](#movieentity)
[TVEpisodeEntity](#tvepisodeentity)
[PlaylistEntity](#playlistentity)
[MusicEntity](#musicentity)
[AdditionalEntity](#additionalentity)

---

### ProgramEntity

```typescript
type ProgramEntity =
  | MovieEntity
  | TVEpisodeEntity
  | TVSeasonEntity
  | TVSeriesEntity
  | AdditionalEntity;
```

See also:

[MovieEntity](#movieentity)
[TVEpisodeEntity](#tvepisodeentity)
[TVSeasonEntity](#tvseasonentity)
[TVSeriesEntity](#tvseriesentity)
[AdditionalEntity](#additionalentity)

---

### Entity

```typescript

```

See also:

[ProgramEntity](#programentity)
[MusicEntity](#musicentity)
[ChannelEntity](#channelentity)
[UntypedEntity](#untypedentity)
[PlaylistEntity](#playlistentity)

---
