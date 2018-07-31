<template>
  <list>
      <cell> 
            <category title="默认形状" hollow color="dark"></category>
            <erosCell cellHeight="120"  style="padding-top:22;" wrap>
                <ErosBadge text="default" type="default"></ErosBadge>
                <ErosBadge text="primary" type="primary"></ErosBadge>
                <ErosBadge text="secondary" type="secondary"></ErosBadge>
                <ErosBadge text="success" type="success"></ErosBadge>
                <ErosBadge text="warning" type="warning"></ErosBadge>
                <ErosBadge text="danger" type="danger"></ErosBadge>
                <ErosBadge text="dark" type="dark"></ErosBadge>
                <ErosBadge text="silver" type="silver"></ErosBadge>
            </erosCell>
            <category title="Rounded" hollow color="dark"></category>
            <erosCell>
                <ErosBadge rounded text="1" type="default"></ErosBadge>
                <ErosBadge rounded text="2" type="primary"></ErosBadge>
                <ErosBadge rounded text="3" type="secondary"></ErosBadge>
                <ErosBadge rounded text="4" type="success"></ErosBadge>
                <ErosBadge rounded text="5" type="warning"></ErosBadge>
                <ErosBadge rounded text="6" type="danger"></ErosBadge>
                <ErosBadge rounded text="7" type="dark"></ErosBadge>
                <ErosBadge rounded text="8" type="silver"></ErosBadge>
                <ErosBadge rounded text="10" type="danger"></ErosBadge>
            </erosCell>
      </cell>
  </list>
</template>

<script>
    import Category from 'eros-ui/components/category';
    import ErosCell from 'eros-ui/components/cell';
    import ErosBadge from 'eros-ui/components/badge';
    export default {
        components: { 
            Category, 
            ErosCell,
            ErosBadge
        },
    }    
</script>