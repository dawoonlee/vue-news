<template>
    <div>
        <!-- 질문 상세정보 -->
        <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <!-- slot: 상위 컴포넌트에서 정의할 영역 -->
                <slot name="username"></slot>
                <div class="time">
                    <slot name="time"></slot>
					<slot name="karma"></slot>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object,
    },
};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
