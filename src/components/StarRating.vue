<template>
    <div ref="star" class="star-rating" :data-rating="data.vote_average">
        <div class="empty-stars">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
        </div>

        <div class="full-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StarRating',
    props: {
        data: Object
    },
    watch: {
        data: function(){
            this.starRatings();
        }
    },
    mounted(){
        this.starRatings();
    },
    methods: {
        async starRatings(){
            let starRating = await this.$refs['star'],
                fullStars = starRating.lastChild,
                rating = parseFloat(starRating.getAttribute('data-rating')) || 0,
                percentWidth = (rating / 2) * 20;
            fullStars.style.width = percentWidth + '%';

            console.log(fullStars, rating, percentWidth);
        }
    }
}
</script>

<style scoped lang="scss">

.star-rating{
    display: inline-block;
    position: relative;
}

.empty-stars{
    position: absolute;
    color: #222;
}


.full-stars {
    overflow: hidden;
    white-space: nowrap;
    color: yellow;
    opacity: 0.8;
}

</style>